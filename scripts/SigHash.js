
const { ethers } = require('hardhat'); 
var log  =  require('chalk-log')

async function main() {
 await hre.run('compile') 
  
  
const Store =  await ethers.getContractFactory("Store"); 
const SetFuncSig = Store.interface.encodeFunctionData('set', [100]); 




log.progress (`The Hash of the function signature is '${SetFuncSig}' `); 


}

main().catch( (error) => { 
  console.error(error)
process.exitCode =1 


})

