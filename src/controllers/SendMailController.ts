import { Request, Response } from 'express'

class SendMailController {
	async execute(request: Request, response: Response) {
		const { value } = request.body

		console.log(value)
		return response.json(value)
	}
}

export { SendMailController }
