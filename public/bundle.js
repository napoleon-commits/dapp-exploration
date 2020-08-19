const contractABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "data",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_data",
                "type": "string"
            }
        ],
        "name": "set",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
const contractAddress = "0x91a703882b20A3cF2cA9645924188d9Cc03cB2dE";
const web3 = new Web3('http://127.0.0.1:8545');
const simpleStorage = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
    const $setData = document.getElementById('setData');
    const $data = document.getElementById('data');
    let accounts = [];
    web3.eth.getAccounts()
        .then(_accounts => {
            accounts = _accounts;
        });

    const getData = () => {
        simpleStorage.methods.data().call().then(res => {
            $data.innerHTML = res;
        });
    };

    getData();

    $setData.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = e.target.elements[0].value;
        simpleStorage.methods.set(data).send({
            from: accounts[0],
        }).then(getData);
    });
});