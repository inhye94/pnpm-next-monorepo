export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      2,
      "always",
      [
        "lower-case",
        "sentence-case",
        "start-case",
        "pascal-case",
        "upper-case",
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
      ],
    ],
  },
};
