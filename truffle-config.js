module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id : "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
    }
  }
}
