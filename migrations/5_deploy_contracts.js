var Giornale = artifacts.require("./giornaleLavori.sol");
// var Payment = artifacts.require("./user_contract.sol");

module.exports = function(deployer) {
  deployer.deploy(Giornale);
  // deployer.deploy(crud);
};