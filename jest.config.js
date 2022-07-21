const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  modulePathIgnorePatterns: ["<rootDir>/__mocks__"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/__mocks__"],
  testEnvironment: 'jsdom'
}

module.exports = createJestConfig(customJestConfig);