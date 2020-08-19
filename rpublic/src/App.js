import React from 'react';
import logo from './logo.svg';
import './App.css';

import Web3 from 'web3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: '',
      contract: null,
      accounts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
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
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    this.setState({
      contract,
    })
    web3.eth.getAccounts()
      .then(accounts => {
        this.setState({
          accounts,
        });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClick() {
    const { contract, input, accounts } = this.state;
    contract.methods.set(input).send({
      from: accounts[0],
    }).then(this.getData);
  }

  getData() {
    const { contract } = this.state;
    contract.methods.data().call().then(data => {
      this.setState({
        data,
      })
    });
  }
  render() {
    const { data, input } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <div>
            <div>Set data</div>
            <div><input id="input" value={input} onChange={this.handleChange} /></div>
            <div><button onClick={this.handleClick}>Submit</button></div>
            <div>Data: {data}</div>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
