module.exports = {
  extends: ["@mate-academy/eslint-config-react-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],

  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react/self-closing-comp": "off",
    "react/display-name": "off",
    "no-unused-expressions": "off",

    // TypeScript
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
