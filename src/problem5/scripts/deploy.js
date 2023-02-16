

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Retrieve = await ethers.getContractFactory("Retrieve");
  const RetrieveContract = await Retrieve.deploy();
  console.log("Contract address: ", RetrieveContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });