module.exports = {
	setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)']
};
