module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "google",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [],
  rules: {
    "require-jsdoc": 0,
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-unused-vars": 1,
    "vue/multi-word-component-names": 0,
    "vue/no-use-v-if-with-v-for": "warn"
  },
  overrides: []
}
