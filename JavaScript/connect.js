let web3;
let accounts;

const connectWallet = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed
      accounts = await web3.eth.getAccounts();
      console.log('Connected to account ', accounts[0]);
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
  }
  // Non-dapp browsers...
  else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
};
