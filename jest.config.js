module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/coverage",
    "<rootDir>/dist",
  ],
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@modules(.*)$": "<rootDir>/modules$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@shared-components(.*)$": "<rootDir>/shared-components$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "^@ui(.*)$": "<rootDir>/ui$1",
    "^@utils(.*)$": "<rootDir>/utils$1",
    "^@models(.*)$": "<rootDir>/models$1",
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
