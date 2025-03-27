// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    struct Candidate {
        string name;
        uint votes;  
    }

    Candidate[] public candidates;

    function addCandidate(string memory _name) public {
        candidates.push(Candidate(_name, 0));
    }

    function vote(string memory _name) public {
        for (uint i = 0; i < candidates.length; i++) {
            if (keccak256(bytes(candidates[i].name)) == keccak256(bytes(_name))) {
                candidates[i].votes++;
                return;
            }
        }
        revert("Candidate does not exist");
    }

    function getVotes(string memory _name) public view returns (uint) {
        for (uint i = 0; i < candidates.length; i++) {
            if (keccak256(bytes(candidates[i].name)) == keccak256(bytes(_name))) {
                return candidates[i].votes;
            }
        }
        revert("Candidate not found");
    }
}
