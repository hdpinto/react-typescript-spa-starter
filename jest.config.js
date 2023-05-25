function configFactory({ setupFiles = [], transformFile }) {
  return {
    setupFiles,
    collectCoverageFrom: ["src/**/*.(ts|tsx|js|jsx)", "!src/**/*.stories.tsx"],
    coverageReporters: ["json", "html", "lcov"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    reporters: ["default"],
    testMatch: [
      "**/__tests__/*.+(ts|tsx|js|jsx)",
      "**/*.test.+(ts|tsx|js|jsx)",
    ],
    moduleNameMapper: {
      "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    },
    transform: {
      "\\.(js|jsx|ts|tsx$)": transformFile,
    },
  };
}

const config = configFactory({
  setupFiles: ["./jest.setup.js"],
  transformFile: "babel-jest",
});

module.exports = config;
