async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Lottery = await ethers.getContractFactory("LotteryV4");
    const lotteryV4 = await Lottery.deploy();
  
    console.log("Contract deployed to : address:", lotteryV4.address);
  }
  

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });