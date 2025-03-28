export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      2,
      "always",
      [
        "lower-case", // default
        "upper-case", // UPPERCASE
        "camel-case", // camelCase
        "kebab-case", // kebab-case
        "pascal-case", // PascalCase
        "sentence-case", // Sentence case
        "snake-case", // snake_case
        "start-case", // Start Case
      ],
    ],
    "type-enum": [
      2,
      "always",
      [
        "init",
        "feat",
        "chore",
        "style",
        "fix",
        "test",
        "deploy",
        "refactor",
        "rename",
        "remove",
        "docs",
        "wip",
      ],
    ],
  },
};
