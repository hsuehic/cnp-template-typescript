module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.spec.ts'],

  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
    },
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/types/**/*.ts',
  ],
  coverageReporters: ['json', 'html', 'text', 'text-summary', 'cobertura'],
  coverageDirectory: './reports',
};
