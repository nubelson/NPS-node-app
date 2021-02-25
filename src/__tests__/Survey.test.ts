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
})
