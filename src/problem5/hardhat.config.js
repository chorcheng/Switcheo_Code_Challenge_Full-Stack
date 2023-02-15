require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "wSiPPDEmVvoB-sccIMb1KsLm1-CouRyP"
const GOERLI_PRIVATE_KEY = "0642dfd790fd89060a342b9b48b91ab4eb6321b0f4f47448b3ac12a824501282"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts:[GOERLI_PRIVATE_KEY]
    }
  }
};
