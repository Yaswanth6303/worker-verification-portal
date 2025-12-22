
// 🌐 Universal ESLint + Prettier config for Bun JavaScript projects
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        Bun: "readonly",
      },
    },
    rules: {
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "warn",
      "no-mixed-spaces-and-tabs": "error",
      "no-trailing-spaces": "warn",
      "object-curly-spacing": ["error", "always"],
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  {
    ignores: ["node_modules", "dist", "build", ".next", ".turbo"],
  },
  prettier,
];
