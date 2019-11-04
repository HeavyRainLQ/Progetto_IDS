var Sal = artifacts.require("./sal.sol");
// var Payment = artifacts.require("./user_contract.sol");

module.exports = function(deployer) {
  deployer.deploy(Sal);
  // deployer.deploy(crud);
};