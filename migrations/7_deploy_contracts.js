var RegistroContabilita = artifacts.require("./RegistroContabilita.sol");
// var Payment = artifacts.require("./user_contract.sol");

module.exports = function(deployer) {
  deployer.deploy(RegistroContabilita);
  // deployer.deploy(crud);
};