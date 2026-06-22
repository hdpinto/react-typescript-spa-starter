import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

const reactPlugin = fixupPluginRules(react);
const reactHooksPlugin = fixupPluginRules(reactHooks);
const jsxA11yPlugin = fixupPluginRules(jsxA11y);

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "coverage"],
  },
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11yPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-alert": "error",
      "no-var": "error",
      "prefer-const": "error",
      "guard-for-in": "error",
      "no-new-wrappers": "error",
      "no-bitwise": "error",
      "class-methods-use-this": "error",
      camelcase: ["error", { ignoreDestructuring: true }],
      complexity: ["error", { max: 10 }],
      eqeqeq: ["error", "always", { null: "ignore" }],
      "@typescript-eslint/consistent-type-imports": "warn",
    },
  },
  {
    files: ["**/*.mjs", "**/*.cjs", "**/*.config.ts"],
    ...tseslint.configs.disableTypeChecked,
  }
);
