var Misura = artifacts.require("./librettoMisure.sol");
// var Payment = artifacts.require("./user_contract.sol");

module.exports = function(deployer) {
  deployer.deploy(Misura);
  // deployer.deploy(crud);
};