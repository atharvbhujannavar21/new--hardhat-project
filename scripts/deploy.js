const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();

  await voting.waitForDeployment();

  console.log("Voting contract deployed to:", await voting.getAddress());

  const tx = voting.deploymentTransaction();
  const receipt = await tx.wait();
  console.log("Gas used for deployment:", receipt.gasUsed.toString());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
