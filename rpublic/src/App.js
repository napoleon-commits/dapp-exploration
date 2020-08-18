import React from 'react';
import logo from './logo.svg';
import './App.css';

import Web3 from 'web3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: '',
    }
  }
  componentDidMount() {
    var contractABI = [
      {
        "constant": true,
        "inputs": [],
        "name": "hello",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      }
    ];
    var contractAddress = "0xd68d320d50571f16F18A381F750813d0527a1fC6";
    var web3 = new Web3('http://127.0.0.1:8545');
    var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

    helloWorld.methods.hello().call()
      .then(result => {
        this.setState({
          hello: result
        });
      });
  }
  render() {
    const { hello } = this.state;
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
          <div>{hello}</div>
        </header>
      </div>
    )
  }
}

export default App;
