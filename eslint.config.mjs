import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

// Fix for ESLint 9 serialization error with FlatCompat parser
for (const config of eslintConfig) {
  if (config.languageOptions && config.languageOptions.parser) {
    const parser = config.languageOptions.parser;
    if (typeof parser === "object" && !parser.meta) {
      parser.meta = {
        name: "next-babel-parser",
        version: "1.0.0"
      };
    }
  }
}

export default eslintConfig;
