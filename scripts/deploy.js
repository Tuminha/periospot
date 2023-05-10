// scripts/deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Contract = await ethers.getContractFactory("PerioNFT");
    const contract = await Contract.deploy("PerioSpotNFT", "PSNFT", "https://ipfs.io/ipfs/QmZwYhT9gmWZNW7jk4jW3WJvAMm9SNiM71MUM18Ezaaf6p/");


    console.log("Contract address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

    