module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverage: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  preset: 'ts-jest'
};
