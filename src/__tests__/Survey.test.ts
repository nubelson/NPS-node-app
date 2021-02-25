import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe('Survey', () => {
	beforeAll(async () => {
		const connection = await createConnection()
		await connection.runMigrations()
	})

	it('Should create a new survey', async () => {
		const response = await request(app).post('/surveys').send({
			title: 'Default Survey',
			description: 'This is a new survey',
		})

		expect(response.body.description).toBe('This is a new survey')
	})

	it('Should return all surveys', async () => {
		await request(app).post('/surveys').send({
			title: 'New Survey',
			description: 'This is another survey',
		})

		const response = await request(app).get('/surveys')

		expect(response.body.length).toBe(2)
	})
})
