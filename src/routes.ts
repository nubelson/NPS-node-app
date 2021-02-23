import { Router } from 'express'

import { UserController } from './controllers/UserController'

const routes = Router()

const userController = new UserController()

routes.get('/', (req, res) => res.json({ message: 'Hello World! 🌐' }))
routes.post('/users', userController.create)

export default routes
