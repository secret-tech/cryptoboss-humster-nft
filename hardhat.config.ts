import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { pk } = require('./secrets.json')

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      // network_id: 80001,
      // confirmations: 2,
      // timeoutBlocks: 200,
      // networkCheckTimeout: 50000000,
      accounts: [pk],
      // skipDryRun: true,
      gas: 6000000,
      gasPrice: 18000000000,
  },
  }
};

export default config;
