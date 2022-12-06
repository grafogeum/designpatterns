module.exports = {
	// Tell Jest to look for test files in the `__tests__` directory
	roots: ['<rootDir>/__tests__'],

	// Use the default test runner
	testRunner: 'jest-circus/runner',

	// Use the Jest runtime to run the tests
	testEnvironment: 'jest-environment-jsdom',

	// Use a custom reporter to generate a more readable test output
	reporters: ['jest-silent-reporter'],

	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: false,

	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',

	// A list of paths to directories that Jest should use to search for files in
	roots: ['<rootDir>/src'],

	// A map from regular expressions to paths to transformers
	transform: {
		'^.+\\.jsx?$': 'babel-jest'
	}
};
