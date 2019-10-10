var Crud = artifacts.require("./Crud.sol");
// var Payment = artifacts.require("./user_contract.sol");

module.exports = function(deployer) {
  deployer.deploy(Crud);
  // deployer.deploy(crud);
};
