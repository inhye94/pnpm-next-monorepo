export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
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
