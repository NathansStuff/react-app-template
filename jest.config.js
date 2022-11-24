const config = {
  verbose: true,
  // Adds what's in this file to the top of every file in the test suite
  setupFilesAfterEnv: ['./src/utils/tests/setupTests.ts'],
  collectCoverage: true,
  rootDir: './',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@features/(.*)$': '<rootDir>/src/features/$1',
    '@data/(.*)$': '<rootDir>/src/data/$1',
    '@context/(.*)$': '<rootDir>/src/context/$1',
    '@styles/(.*)$': '<rootDir>/src/styles/$1',
  },
  preset: 'ts-jest/presets/js-with-ts',
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
