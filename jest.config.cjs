module.exports = {
  testMatch: [
    '<rootDir>/src/js/__tests__/*.js'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
