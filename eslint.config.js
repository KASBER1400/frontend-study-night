export default [
  {
    files: ["starter/src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "eqeqeq": "error",
      "semi": ["error", "always"],
      "no-var": "error",
      "prefer-const": "warn",
      "no-undef": "error"
    }
  }
];