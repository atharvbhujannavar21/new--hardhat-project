// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    mapping(string => uint256) public votes;
    string[] public candidates;

    function addCandidate(string memory _name) public {
        candidates.push(_name);
        votes[_name] = 0;
    }

    function vote(string memory _name) public {
        require(votes[_name] > 0 || bytes(_name).length > 0, "Candidate does not exist");
        votes[_name]++;
    }

    function getVotes(string memory _name) public view returns (uint256) {
        return votes[_name];
    }
}
