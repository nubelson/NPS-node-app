/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
	// Stop running tests after `n` failures
	bail: true,

	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// Indicates which provider should be used to instrument code for coverage
	coverageProvider: 'v8',

	// A preset that is used as a base for Jest's configuration
	preset: 'ts-jest',

	// The glob patterns Jest uses to detect test files
	testMatch: ['**/__tests__/*.test.ts'],
}
