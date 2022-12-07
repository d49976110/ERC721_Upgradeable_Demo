// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract TestNFT_Upgrade1 is ERC721Upgradeable {
    uint256 tokenId;

    function initialize(string calldata _name, string memory _symbol)
        public
        initializer
    {
        __ERC721_init(_name, _symbol);
    }

    function mint() external {
        _mint(msg.sender, tokenId);
        tokenId++;
    }

    function sayHello() external view returns (string memory) {
        return "Hello";
    }
}
