var contractABI = [];
var contractAddress = "0xcaa0a4D9bA721f6921Fe0e6136dE72E51a7845Bb";
var web3 = new Web3('http://127.0.0.1:8545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);
console.log('simpleSmartContract');
console.log(simpleSmartContract);
console.log('simpleSmartContract');
console.log('-------------------');
console.log('-------------------');
web3.eth.getAccounts()
.then(console.log);
