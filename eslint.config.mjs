import { FlatCompat } from "@eslint/eslintrc";
import { dirname, join } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const tsconfigPath = join(__dirname, "tsconfig.json");

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: tsconfigPath,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      "no-console": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    },
  },
];

export default eslintConfig;
