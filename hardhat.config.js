
require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")






module.exports = { 

  defaultNetwork :"hardhat",
  networks :  { 
    hardhat : { 
      chainId : 31337,
    }
  },
  solidity: { 
    version: "0.8.13", 
  }

}