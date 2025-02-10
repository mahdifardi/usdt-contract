# USDT Smart Contract Hardhat Project

USDT (ERC-20) smart contract 

To start the project in localhost:

1- make sure ganache-cli is running:
```shell
ganache-cli -d
```
2- start usdt smart contranct project:
```shell
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
```
