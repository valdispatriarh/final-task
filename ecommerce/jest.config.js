module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(vue)$': 'vue-jest',
      '^.+\\.(ts|js)$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'ts', 'vue'],
    testMatch: ['**/tests/**/*.spec.(ts|js)'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  }
  