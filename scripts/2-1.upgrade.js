const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

//todo: change proxy address first
const proxyAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

async function main() {
    const ERC721v2 = await ethers.getContractFactory("TestNFT_Upgrade1");

    console.log("Deploy upgrade contract");
    const proxy = await upgrades.upgradeProxy(proxyAddress, ERC721v2);

    console.log("Proxy address: ", proxy.address);
    await proxy.deployed();

    console.log("Admin address: ", await upgrades.erc1967.getAdminAddress(proxy.address));
    console.log("Implementation address: ", await upgrades.erc1967.getImplementationAddress(proxy.address));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
