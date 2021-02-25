import { Request, Response } from 'express'

class SurveyController {
	async create(request: Request, response: Response) {
		const { title, description } = request.body

		const survey = { title, description }

		console.log(survey)
		return response.json(survey)
	}
}

export { SurveyController }
