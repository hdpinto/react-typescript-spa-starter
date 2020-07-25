module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: [],
  rules: {
    "react/prop-types": [0],
    "brace-style": ["error", "1tbs"],
    "no-var": "error",
    "no-alert": "error",
    "prefer-const": "error",
    "guard-for-in": "error",
    "no-new-wrappers": "error",
    camelcase: ["error", { ignoreDestructuring: true }],
    complexity: ["error"],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-bitwise": "error",
    "class-methods-use-this": "error",
    "@typescript-eslint/indent": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/interface-over-type-literal": 0,
    "@typescript-eslint/prefer-interface": 0,
    "@typescript-eslint/prefer-for-of": 2,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/explicit-member-accessibility": 0,
  },
};
