const {expect} = require ("chai");
const helpers = require("@nomicfoundation/hardhat-network-helpers");
// const {ethers} = require ("ethers");

describe("Retrieve token amount", function () {
	it ("Deployment should retrieve token amounts", async function(){
		/**
		 * Ran into issues with testing
		 * - understand that the tests are executed on the hardhat network
		 * - unsure of how to obtain token addresses from the hardhat network to pass to the retrieving function 
		 */

		const WALLET_ADDR = "0xC0ECB8499D8dA2771aBCbF4091DB7f65158f1468"
		await helpers.impersonateAccount(WALLET_ADDR)
		const [owner] = await ethers.getSigners(WALLET_ADDR);
		const Retrieve = await ethers.getContractFactory("Retrieve");
		const RetrieveContract = await Retrieve.deploy();
		const TOKEN_ADDR = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430","0x0020c5222a24e4a96b720c06b803fb8d34adc0af"]
		// console.log(await RetrieveContract.getBalances(WALLET_ADDR, TOKEN_ADDR));
		expect(await RetrieveContract.getBalances(owner.address, TOKEN_ADDR)).to.have.lengthOf(3)
})
})