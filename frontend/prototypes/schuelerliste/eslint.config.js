// eslint.config.js – Regeln, nach denen ESLint unseren JavaScript-Code prüft
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  // Diese Ordner nicht prüfen
  { ignores: ["coverage/", "node_modules/"] },

  // Empfohlene Grundregeln (z. B. keine unbenutzten Variablen, keine undefinierten Namen)
  js.configs.recommended,

  // Unser Code läuft im Browser → window, document, location usw. sind bekannt
  {
    files: ["js/**/*.js"],
    languageOptions: { globals: globals.browser },
  },

  // Tests laufen mit Jest → describe, test, expect sind bekannt
  {
    files: ["tests/**/*.js"],
    languageOptions: { globals: globals.jest },
  },

  // Eigene Regeln
  {
    rules: {
      eqeqeq: "error", // immer === statt ==
      "prefer-const": "error", // const, wenn sich der Wert nicht ändert
      "no-var": "error", // kein altes var, nur let/const
    },
  },

  // Formatierung macht Prettier → ESLint soll sich da nicht einmischen
  prettier,
];
