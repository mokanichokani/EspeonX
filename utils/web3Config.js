import { BrowserProvider, Contract } from 'ethers';

const FRIEND_IP = "192.168.150.222";
const FRIEND_PORT = "8545";
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const RPC_URLS = [`http://${FRIEND_IP}:${FRIEND_PORT}`]; 

const contractABI = [
  {
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "message",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const connectWallet = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  try {
    console.log('Starting wallet connection...');

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    try {
      console.log('Adding Ethereum chain...');
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x7A69', // 31337 in hex
          chainName: 'Friends Hardhat Network',
          rpcUrls: RPC_URLS,  // Now properly in an array
          nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
          }
        }]
      });

      // Switch to the network
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x7A69' }],
      });

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new Contract(CONTRACT_ADDRESS, contractABI, signer);

      try {
        const message = await contract.getMessage();
        console.log('Contract message:', message);

        return {
          address: accounts[0],
          message: message
        };
      } catch (contractError) {
        console.error('Contract interaction error:', contractError);
        return {
          address: accounts[0],
          message: "Contract interaction failed"
        };
      }

    } catch (switchError) {
      // Handle the case where the network switch failed
      if (switchError.code === 4902) {
        throw new Error('Please add the network to MetaMask first');
      }
      throw new Error('Failed to switch network');
    }

  } catch (error) {
    console.error('Wallet connection error:', error);
    throw error;
  }
};