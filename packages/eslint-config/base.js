import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

const baseConfig = {
  files: ["**/*.{ts,tsx}"],

  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: "./tsconfig.json",
      ecmaVersion: "latest",
      sourceType: "module",
    },
    globals: {
      ...globals.es2021,
      ...globals.node,
    },
  },

  plugins: {
    "@typescript-eslint": tseslint,
    import: importPlugin,
  },

  rules: {
    /* -------------------- TypeScript strictness -------------------- */

    "@typescript-eslint/no-explicit-any": "error",

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],

    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
      },
    ],

    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",

    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      { allowExpressions: true },
    ],

    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": "error",

    /* -------------------- Imports -------------------- */

    "import/order": "off",

    "import/no-default-export": "error",

    /* -------------------- General -------------------- */

    "no-debugger": "error",
    eqeqeq: "error",
    curly: "error",
  },
};

export const config = [js.configs.recommended, baseConfig];
