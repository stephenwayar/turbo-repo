const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended", 
    "prettier", 
    "turbo", 
    "plugin:react/recommended"
  ],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/react-in-jsx-scope": "off",
    "no-trailing-spaces": "off",
    "space-infix-ops": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "comma-spacing": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 1 }],
    "@typescript-eslint/no-unused-vars": ["warn", { "varsIgnorePattern": "^_" }],
    "no-unneeded-ternary": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "function" },
      { "blankLine": "always", "prev": "function", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": "multiline-block-like", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "multiline-block-like" }
    ],
    "react-hooks/exhaustive-deps": "off"
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    {
      files: [
        "packages/ui/src/**/*.{js,jsx,ts,tsx}"
      ],
    },
  ],
};