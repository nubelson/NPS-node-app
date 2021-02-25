import { Router } from 'express'

import { UserController } from './controllers/UserController'
import { SurveyController } from './controllers/SurveyController'
import { SendMailController } from './controllers/SendMailController'

const routes = Router()

const userController = new UserController()
const surveyController = new SurveyController()
const sendMailController = new SendMailController()

routes.get('/', (req, res) => res.json({ message: 'Hello World! 🌐' }))

//? Users
routes.post('/users', userController.create)

//? Surveys
routes.get('/surveys', surveyController.show)
routes.post('/surveys', surveyController.create)

//? SurveysUsers
routes.post('/surveysusers', sendMailController.execute)

export default routes
