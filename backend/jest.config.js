module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.js$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!uuid)"],
};
