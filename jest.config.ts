import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\.(ts|tsx)$': ['ts-jest', { tsconfig: { jsx: 'react' } }],
    // src/vendor/*.js is generated ESM (see scripts/vendor-stylis-rtl.mjs);
    // Jest needs it down-levelled to CJS before it can require it.
    '^.+\.(js|jsx)$': [
      'babel-jest',
      { presets: [['@babel/preset-env', { targets: { node: 'current' } }]] },
    ],
  },
}

export default config
