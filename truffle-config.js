module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,

      network_id : "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
      //gas: 10000000,
      //gasLimit: 10000000

    },
    solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }

  }
}



// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545, // ganache-cli
//       //port: 7545, // ganache ui
//       network_id: "*" // Match any network id
//     }
//   },
//   solc: {
//     optimizer: {
//       enabled: true,
//       runs: 200
//     }
//   }
// };
