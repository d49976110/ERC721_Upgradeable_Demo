const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC721", function () {
    let erc721;

    before(async () => {
        [owner, addr1, ...addrs] = await ethers.getSigners();
        const ERC721 = await ethers.getContractFactory("TestNFT");
        erc721 = await ERC721.deploy("TEST NFT", "TNT");
    });

    it("mint ", async () => {
        await erc721.mint();
        expect(await erc721.balanceOf(owner.address)).to.eq(1);
    });
});
