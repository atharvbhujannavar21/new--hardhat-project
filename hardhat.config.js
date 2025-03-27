require("@nomicfoundation/hardhat-ethers");
require("hardhat-gas-reporter");
const fs = require("fs");

module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt", // Save gas report to file
    noColors: true, // Remove colors for clean text output
  },
};
