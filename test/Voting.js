const { expect } = require("chai");

describe("Voting Contract", function () {
  let Voting, voting;

  beforeEach(async function () {
    Voting = await ethers.deployContract("Voting");
    voting = await Voting.waitForDeployment();
  });

  it("Should allow adding a candidate", async function () {
    await voting.addCandidate("Alice");
    expect(await voting.getVotes("Alice")).to.equal(0);
  });

  it("Should allow voting for a candidate", async function () {
    await voting.addCandidate("Alice");
    await voting.vote("Alice");
    expect(await voting.getVotes("Alice")).to.equal(1);
  });
});
