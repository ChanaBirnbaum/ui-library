# Environment & Tooling — recommended project config

This document contains recommended, copy-pastable snippets for `package.json`, `tsconfig.json`, `jest` and `eslint` used by the UI library. Add these to the repository to ensure contributors and CI run in a consistent environment.

1) Install recommended dev dependencies

Run (example):

```bash
npm install -D \
  typescript@^5.1 ts-node ts-jest jest jest-environment-jsdom @types/jest \
  @testing-library/react @testing-library/jest-dom @testing-library/user-event \
  eslint@^9 @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  eslint-plugin-react eslint-plugin-react-hooks prettier
```

2) package.json (scripts snippet)

Add these scripts to `package.json`:

```json
"scripts": {
  "dev": "storybook dev -p 6006",
  "build": "vite build",
  "build-storybook": "storybook build",
  "test": "jest",
  "lint": "eslint --no-ignore \"src/**/*.{ts,tsx,js,jsx}\"",
  "lint:fix": "eslint --no-ignore \"src/**/*.{ts,tsx,js,jsx}\" --fix"
}
```

3) tsconfig.json (recommended additions)

Make sure your `tsconfig.json` includes testing types and helpful compiler options:

```jsonc
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["DOM", "ES2022"],
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "types": ["jest", "@testing-library/jest-dom"]
  },
  "include": ["src/**/*", "jest.setup.ts"],
  "exclude": ["node_modules", "dist"]
}
```

4) Jest configuration — prefer JS config to avoid `ts-node` requirement

If you want to avoid requiring `ts-node` in contributors' environments, use a JavaScript Jest config file `jest.config.cjs`. Example:

```js
// jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json']
};
```

If you keep `jest.config.ts`, include `ts-node` in devDependencies so Jest can parse it.

5) jest.setup.ts

Create a small setup file to enable DOM matchers:

```ts
import '@testing-library/jest-dom';
```

6) ESLint example (basic `.eslintrc.cjs` legacy config)

If you prefer a simple config that works across environments, add `.eslintrc.cjs`:

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json', sourceType: 'module' },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  settings: { react: { version: 'detect' } },
  env: { browser: true, node: true, jest: true },
  rules: {
    // project rules
  }
};
```

7) Component typing guideline (prevent extend errors)

Add this rule to the SPEC and follow it in each component types file to avoid errors when extending MUI types:

```
// Use a type intersection instead of an interface extends when composing MUI prop types
export type IpsTextFieldProps = TextFieldProps & {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  // additional component props
};
```

Rationale: some exported MUI prop types are generics or non-object-like in certain build/test environments; `type X = BaseProps & {}` is more robust than `interface X extends BaseProps {}`.

8) CI checklist (summary)

CI should run (in order):

```bash
npm ci
npm run lint
npm test
npm run build
npm run build-storybook
```

9) Notes

- Keep `skipLibCheck: true` in `tsconfig.json` to reduce transient typing errors from third-party libraries during development.
- If you upgrade TypeScript beyond the supported range of `@typescript-eslint`, upgrade `@typescript-eslint/*` packages accordingly and update the SPEC compatibility table.

---

If you'd like, I can also apply these snippets directly to the repository's `package.json`, `tsconfig.json` and create `jest.config.cjs` / `.eslintrc.cjs` files. Tell me which files you want updated.
