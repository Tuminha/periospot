let web3;
let accounts;
let contract;

// Import the contract ABI
const contractABI = require('./src/artifacts/Solidity/PerioNFT.sol/PerioNFT.json').abi;

// Contract Address
const contractAddress = '0xA2Ce3132e25F0af1dF0412aA8eAcAe38F282Bd01';


const connectWallet = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed
      accounts = await web3.eth.getAccounts();
      console.log('Connected to account ', accounts[0]);

       // Instantiate the contract
       contract = new web3.eth.Contract(contractABI, contractAddress);
       console.log('Contract is ', contract);



    } catch (error) {
      // User denied account access...
      console.error("User denied account access")
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    accounts = await web3.eth.getAccounts();
    console.log('Connected to account ', accounts[0]);

    // Instantiate the contract
    contract = new web3.eth.Contract(contractABI, contractAddress);
    console.log('Contract is ', contract);

  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }

};

  // Function to handle minting
  
  const mintNFT = async () => {
    try {
        // Call the mint function of your smart contract
        const result = await contract.methods.createNFT(accounts[0]).send({ from: accounts[0] });
        console.log("Minted successfully: ", result);
    } catch (error) {
        console.error("Error minting token: ", error);
  }
};