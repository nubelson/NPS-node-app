import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveyRepository } from '../repositories/SurveyRepository'
import { SurveyUserRepository } from '../repositories/SurveysUsersRepository'
import { UserRepository } from '../repositories/UserRepository'
import SendMailService from '../services/SendMailService'

class SendMailController {
	async execute(request: Request, response: Response) {
		const { email, survey_id } = request.body

		const usersRepository = getCustomRepository(UserRepository)
		const surveysRepository = getCustomRepository(SurveyRepository)
		const surveysUsersRepository = getCustomRepository(SurveyUserRepository)

		const usersExists = await usersRepository.findOne({
			email,
		})

		if (!usersExists) {
			return response.status(404).json({
				error: 'User does not exists!',
			})
		}

		const surveyExists = await surveysRepository.findOne({
			id: survey_id,
		})

		if (!surveyExists) {
			return response.status(404).json({
				error: 'Survey does not exists!',
			})
		}

		//TODO Salvar as informações na tabela survey_user
		const surveyUser = surveysUsersRepository.create({
			user_id: usersExists.id,
			survey_id,
		})

		await surveysUsersRepository.save(surveyUser)

		//TODO Enviar o email para o usuário
		await SendMailService.execute(
			email,
			surveyExists.title,
			surveyExists.description
		)

		return response.json(surveyUser)
	}
}

export { SendMailController }
