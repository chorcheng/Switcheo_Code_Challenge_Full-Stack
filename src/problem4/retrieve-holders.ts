import { ethers} from 'ethers';

const ALCHEMPY_API_KEY = "wSiPPDEmVvoB-sccIMb1KsLm1-CouRyP"
// const CONTRACT_ADDR = ethers.getAddress("0xc0ecb8499d8da2771abcbf4091db7f65158f1468")
const CONTRACT_ADDR = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468"
const addresses = [
    ethers.getAddress("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430"),
    ethers.getAddress("0x0020c5222a24e4a96b720c06b803fb8d34adc0af"),
    ethers.getAddress("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"),
] 

const addresses_a = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
]
const network = "homestead";

// const provider =  new ethers.AlchemyProvider("homestead", ALCHEMPY_API_KEY);
const provider = ethers.getDefaultProvider(network, 
    {
        alchemy: ALCHEMPY_API_KEY
    });

const abi = [{"inputs":[{"internalType":"address","name":"_lockProxyAddress","type":"address"},{"internalType":"address","name":"_legacyAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"circulatingSupply","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"legacyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockProxyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swapLegacy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

const retrieve_holders = async () =>  {
    const contract = new ethers.Contract(CONTRACT_ADDR, abi, provider)
    
    console.log(await contract.getFunction)
    var results:{ address: string; amount: BigInt; }[] = []
    try{
        for (var i =0;i<addresses.length;i++){
        results.push({ 
            address: addresses_a[i], 
            amount: await contract.balanceOf(addresses_a[i])
        })
        //unable to access balanceOf function in the contract//
        }
        const res = await Promise.all(results)
        console.log(res)
        return res 
    }
    catch(error){
        console.error(error)
        console.error("Error in obtaining balance at addresses likely due to improper instantiation of the token contract.")
        return results;
    }
}

retrieve_holders().then((res) => {
    for (var i = 0; i < res.length; i++){
        console.log(res[i].address , res[i].amount)
    }
})