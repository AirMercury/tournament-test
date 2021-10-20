
const hre = require("hardhat");

async function main() {

  const DAI = await hre.ethers.getContractFactory("DAI");
  const dai = await DAI.deploy(1337);
  await dai.deployed();
  console.log("DAI Contract deployed to:", dai.address);

  const Tournament = await hre.ethers.getContractFactory("Tournament");
  const tournament = await Tournament.deploy();
  await tournament.deployed();
  console.log("DAI Contract deployed to:", tournament.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
