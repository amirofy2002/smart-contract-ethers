# Libraries

```
npm i hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
```

# Step 1

```
npx hardhat
```

after intaliing a new directory entitled contract will be created. we just using sample project of hardhat

we should set path of our contract to be used in the react so we need to change _hardhat.config.js_ as follows:

```
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};
```

# Step 2

Compiling contract by

```
npx hardhat compile
```

# Step 3

Compiling contract by usging following command:

```
npx hardhat compile
```

# Deploy to network by using following command:

```
npx hardhat run scripts/deploy.js --network localhost
```

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
