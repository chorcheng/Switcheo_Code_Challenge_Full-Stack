import {BigNumberish, ethers} from 'ethers';

const ALCHEMPY_API_KEY = "wSiPPDEmVvoB-sccIMb1KsLm1-CouRyP"
const addresses = [
    ethers.getAddress("0xb5d4f343412dc8efb6ff599d790074d0f1e8d430"),
    ethers.getAddress("0x0020c5222a24e4a96b720c06b803fb8d34adc0af"),
    ethers.getAddress("0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"),
] 
const network = "homestead";

const provider = ethers.getDefaultProvider(network, {
    alchemy: ALCHEMPY_API_KEY,
});

const retrieve_holders = async () =>  {
    var results:{ address: string; amount: BigInt; }[] = []
    for (var i =0;i<addresses.length;i++){
        results.push({ 
            address: addresses[i], 
            amount: await provider.getBalance(addresses[i])
        })
    }
    const res = await Promise.all(results)
    return res 
}

retrieve_holders().then( console.log)