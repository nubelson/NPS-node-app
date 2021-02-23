import { Request, Response } from 'express'

class UserController {
	async create(request: Request, response: Response) {
		const { body } = request

		console.log(body)
		response.send(body)
	}
}

export { UserController }
