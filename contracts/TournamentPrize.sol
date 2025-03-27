// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TournamentPrize {
    mapping(address => uint256) public prizePools;
    mapping(uint256 => address) public tournamentWinners;
    
    event PrizeAwarded(address winner, uint256 amount, uint256 tournamentId);
    
    function awardPrize(address winner, uint256 tournamentId) external payable {
        require(msg.value > 0, "Prize amount must be greater than 0");
        tournamentWinners[tournamentId] = winner;
        prizePools[winner] += msg.value;
        emit PrizeAwarded(winner, msg.value, tournamentId);
    }
    
    function claimPrize() external {
        uint256 amount = prizePools[msg.sender];
        require(amount > 0, "No prize available to claim");
        prizePools[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
} 