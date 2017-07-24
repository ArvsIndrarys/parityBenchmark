var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8540'));

var metacoinAddress = "0x8CFA9aBA5b0284C37C8d2ca94eFd157e91C45099";
var metacoinABI = [{
    "constant": true,
    "inputs": [{
      "name": "receiver",
      "type": "address"
    }],
    "name": "resplenishAccount",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSendCount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "addr",
      "type": "address"
    }],
    "name": "getBalanceInEth",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "receiver",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "sendCoin",
    "outputs": [{
      "name": "sufficient",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "conversionRate",
        "type": "uint256"
      }
    ],
    "name": "convert",
    "outputs": [{
      "name": "convertedAmount",
      "type": "uint256"
    }],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "addr",
      "type": "address"
    }],
    "name": "getBalance",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  }
];

var Metacoin = web3.eth.contract(metacoinABI);
var metacoinInstance = Metacoin.at(metacoinAddress);
var interval = setInterval(transactions, 5000);

function transactions() {
  web3.personal.unlockAccount("0x00a0eDbA4D3475eCD9E94729a8B705B1A91040fF", "user");
  metacoinInstance.sendCoin.sendTransaction("0x00Cd6Dc521b5e5546d4cc1a347e90d0c2fDa84AB", 100, {
    from: "0x00a0eDbA4D3475eCD9E94729a8B705B1A91040fF"
  });
  console.log("transaction to nodeUbuntu sent");
  web3.personal.unlockAccount("0x00a0eDbA4D3475eCD9E94729a8B705B1A91040fF", "user");
  metacoinInstance.sendCoin.sendTransaction("0x00Cd6Dc521b5e5546d4cc1a347e90d0c2fDa84AB", 100, {
    from: "0x00a0eDbA4D3475eCD9E94729a8B705B1A91040fF"
  });
  console.log("transaction to nodeUbuntu sent");
  web3.personal.unlockAccount("0x00Cd6Dc521b5e5546d4cc1a347e90d0c2fDa84AB", "nodeUbuntu");
  metacoinInstance.sendCoin.sendTransaction("0x00a0eDbA4D3475eCD9E94729a8B705B1A91040fF", 100, {
    from: "0x00Cd6Dc521b5e5546d4cc1a347e90d0c2fDa84AB"
  });
  console.log("transaction to user sent");
}
