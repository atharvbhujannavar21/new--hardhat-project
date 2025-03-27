const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const voting = await ethers.getContractAt("Voting", "0x5FbDB2315678afecb367f032d93F642f64180aa3");

    console.log("Interacting with contract at:", voting.target);

    // Add a candidate
    const addTx = await voting.addCandidate("Alice");
    await addTx.wait();
    console.log("✅ Added candidate: Alice");

    // Vote for a candidate
    const voteTx = await voting.vote("Alice");
    await voteTx.wait();
    console.log("✅ Voted for: Alice");

    // Get vote count
    const votes = await voting.getVotes("Alice");
    console.log(`🗳️ Alice has ${votes} votes.`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
