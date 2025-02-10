import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const USDT = await ethers.getContractFactory("USDTMock");
  const usdt = await USDT.deploy();

  await usdt.waitForDeployment();

  console.log("USDT Contract deployed at:", await usdt.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
