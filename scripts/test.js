// scripts/test.js
const hre = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  const Contract = await hre.ethers.getContractFactory("PerioNFT");
  const contract = Contract.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3"); // Use the contract address from the deploy script

  const result = await contract.mint(owner.address);
  console.log("Minted successfully: ", result);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
