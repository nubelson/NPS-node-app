import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe('User', () => {
	beforeAll(async () => {
		const connection = await createConnection()
		await connection.runMigrations()
	})

	it('Should create a new user', async () => {
		const response = await request(app).post('/users').send({
			name: 'Default User',
			email: 'user@example.com',
		})

		expect(response.status).toBe(201)
	})
})
