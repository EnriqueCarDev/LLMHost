module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@src/(.*)': '<rootDir>/src/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1',
    '@api/(.*)': ['<rootDir>/src/app/services/api/$1'],
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['src/assets/js/intl-tel-input/*'],
  coverageThreshold: {
    global: {
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/app/services/api/services'],
  collectCoverage: true,
  coverageDirectory: 'coverage/digiposte-web',
};
