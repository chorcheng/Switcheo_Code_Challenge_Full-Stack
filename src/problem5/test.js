const { ethers } = require("ethers");

const ALCHEMY_API_KEY = "wSiPPDEmVvoB-sccIMb1KsLm1-CouRyP"

const ADDR = "0x8e695189A0DB83aC7f59dBaDa755220660951966…";   // your contract address
const ABI = [
	"function getBalances(address Address, string[] tokens)"
];    // your contract ABI

const ADDRESS = "0x3f8D2C91f3a778Bb20f10B8812bF887faDBb5F3D"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x7af963cf6d228e564e2a0aa0ddbf06210b38615d"
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.getDefaultProvider( "goerli");
const signer = ethers.Signer.connect(provider);
const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, signer);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);