module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/test/**',
    '!src/**/*.test.js'
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  testMatch: [
    '**/src/test/**/*.test.js'
  ],
  verbose: true,
  coverageReporters: ['text', 'text-summary', 'lcov', 'html']
};
