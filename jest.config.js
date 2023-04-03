module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  collectCoverage: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  preset: '@shelf/jest-mongodb'
}
