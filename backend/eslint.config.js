const globals = require("globals");
const pluginJs = require("@eslint/js");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
  prettierConfig
];
