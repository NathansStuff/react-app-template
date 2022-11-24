const config = {
  verbose: true,
  // Adds what's in this file to the top of every file in the test suite
  setupFilesAfterEnv: ['./src/utils/tests/setupTests.ts'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // moduleNameMapper: {
  //   '@components/templates': '<rootDir>/src/components/templates',
  //   '@components': '<rootDir>/src/components',
  // },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    // Included
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    // Excluded
    '!src/**/*.d.ts',
    '!pages/_app.page.tsx',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.mocks.{js,jsx,ts,tsx}',
    '!src/**/index.{js,jsx,ts,tsx}', // index files should only export other files
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

module.exports = config;
