var Payment = artifacts.require("./Payment.sol");
// var Payment = artifacts.require("./user_contract.sol");

module.exports = function(deployer) {
  deployer.deploy(Payment);
  // deployer.deploy(crud);
};
