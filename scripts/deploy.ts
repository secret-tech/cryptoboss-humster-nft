import { ethers } from "hardhat";

async function main() {
  const Hamsters = await ethers.getContractFactory("CryptoBossHamsters");
  const hamsters = await Hamsters.deploy();
  await hamsters.deployed();
  console.log(`Deployed at: ${hamsters.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
