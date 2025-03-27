const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const voting = await ethers.getContractAt("Voting", "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9");

    console.log("Interacting with contract at:", voting.target);

    // Add a candidate
    let tx = await voting.addCandidate("Alice");
    let receipt = await tx.wait();
    console.log("✅ Added candidate: Alice");
    console.log(`⛽ Gas used for adding candidate: ${receipt.gasUsed.toString()} units`);

    // Vote for a candidate
    tx = await voting.vote("Alice");
    receipt = await tx.wait();
    console.log("✅ Voted for: Alice");
    console.log(`⛽ Gas used for voting: ${receipt.gasUsed.toString()} units`);

    // Get vote count
    const votes = await voting.getVotes("Alice");
    console.log(`🗳️ Alice has ${votes} votes.`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
