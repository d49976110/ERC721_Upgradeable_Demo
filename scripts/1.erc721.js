const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {
    const NFT = await ethers.getContractFactory("TestNFT");

    console.log("Deploy ERC721");
    const contract = await NFT.deploy("TESTNFT", "TNF");

    console.log("ERC721 contract address: ", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
