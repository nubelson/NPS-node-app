import { Router } from 'express'

import { UserController } from './controllers/UserController'
import { SurveyController } from './controllers/SurveyController'

const routes = Router()

const userController = new UserController()
const surveyController = new SurveyController()

routes.get('/', (req, res) => res.json({ message: 'Hello World! 🌐' }))

//? Users
routes.post('/users', userController.create)

//? Surveys
routes.get('/surveys', surveyController.show)
routes.post('/surveys', surveyController.create)

export default routes
