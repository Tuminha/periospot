require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.1",
  paths: {
    sources: "./Solidity",
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};
