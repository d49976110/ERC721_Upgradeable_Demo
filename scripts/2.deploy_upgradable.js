const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {
    const ERC721_Upgradable = await ethers.getContractFactory("TestNFT_Upgradable");

    console.log("Deploy ERC721_Upgradable");
    const proxy = await upgrades.deployProxy(ERC721_Upgradable, ["TESTNFT", "TNF"], { initializer: "initialize" });

    console.log("Proxy address: ", proxy.address);
    await proxy.deployed();

    console.log("Admin address: ", await upgrades.erc1967.getAdminAddress(proxy.address));
    console.log("Implementation address: ", await upgrades.erc1967.getImplementationAddress(proxy.address));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
