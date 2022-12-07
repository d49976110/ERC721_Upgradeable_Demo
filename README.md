# ERC721 upgradable

### Follow these steps to create the upgradeable contract

```shell
$ npm install
$ copy .env
 - Wallet Private Key
 - Alchemy Api Key
 - Etherscan Api Key


$ npx hardhat run script/erc721.js --network goerli
$ npx hardhat verify --network goerli <address> "<params1>" "<params2>"

$ npx hardhat run scripts/2.deploy_upgradable.js  --network goerli
$ npx hardhat verify --network goerli <implementation address>
```

### Go to Etherscan to confirm the proxy contract is proxy, then you could write another upgradable contract.

```shell
$ npx hardhat run scripts/2-1.upgrade.js
$ npx hardhat run scripts/2-1.upgrade.js  --network goerli
$ npx hardhat verify --network goerli <implementation address>
```
