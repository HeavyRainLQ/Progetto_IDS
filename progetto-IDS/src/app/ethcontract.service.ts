import { Injectable } from '@angular/core';
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';



declare let require: any;
declare let window: any;

//let tokenAbi = require('../../../build/contracts/Payment.json');
//let tokenAbi2 = require('../../../build/contracts/Crud.json');
let tokenAbi3 = require('../../../build/contracts/librettoMisure.json');

@Injectable({
  providedIn: 'root'
})

export class EthcontractService {
  private web3Provider: any;
  private contracts: {};


  constructor() {

     if (typeof window.web3 !== 'undefined') {
        //this.web3Provider = window.web3.currentProvider;
        console.log("por TRUE::---")
        this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
     } else {
       this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
       console.log("por FALSE::---")
     }

    window.web3 = new Web3(this.web3Provider);

    

  }

  getAccountInfo() 
  {
    console.log("llega peroooo:")
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase(function(err, account) 
      {
        console.log(account)

        if(err === null) {
          account=window.web3.eth.accounts[2];
          window.web3.eth.getBalance(account, function(err, balance)
          {
            if(err === null) 
            {
              return resolve({fromAccount: account, balance:(window.web3.fromWei(balance, "ether")).toNumber()});
            } 
            else {
              return reject({fromAccount: "error", balance:0});
            }
          });
        }

      }); //getCOINbase

    });


  }//fin del metodo getACCOUNT
getValori() 
  { var electionInstance;
    
    let that = this;
    return new Promise((resolve, reject) => {
      
      console.log("LLEGO A MOSTRARRR")
      let crudContract = TruffleContract(tokenAbi3);
      //para
      crudContract.setProvider(that.web3Provider);
      crudContract.deployed().then(function(instance) 
      {  
          electionInstance = instance;
          //INDICE DEL VALOR DE USUARIOS
          
          electionInstance.users(3).then(function(user) {
          var valor1 = user[0];
          var valor2 = user[1]; //NOMBRE DEL USUARIO
          

          console.log("valor recuperado--: ")
          console.log(valor1);
          console.log(valor2);
          

          // Render candidate Result
          
        });

        }).then(function(status) {
          if(status) {
            return resolve({status:true});
          }
        }).catch(function(error){
          console.log(error);

          return reject("Error in transfer value!!");
        });
    });
  




  }//fin del metodo get VALOR

getValor() 
  { var electionInstance;
    
    let that = this;
    return new Promise((resolve, reject) => {
      
      console.log("LLEGO A MOSTRARRR")
      let crudContract = TruffleContract(tokenAbi3);
      //para
      crudContract.setProvider(that.web3Provider);
      crudContract.deployed().then(function(instance) 
      {  
          electionInstance = instance;
          //INDICE DEL VALOR DE USUARIOS
          
          electionInstance.users(3).then(function(user) {
          var valor1 = user[0];
          var valor2 = user[1]; //NOMBRE DEL USUARIO
          

          console.log("valor recuperado--: ")
          console.log(valor1);
          console.log(valor2);
          

          // Render candidate Result
          
        });

        }).then(function(status) {
          if(status) {
            return resolve({status:true});
          }
        }).catch(function(error){
          console.log(error);

          return reject("Error in transfer value!!");
        });
    });
  




  }//fin del metodo get VALOR


  transfer_Value(
    _valor,
    _transferFrom
    
  ) {
    let that = this;

    return new Promise((resolve, reject) => {
      
      let crudContract = TruffleContract(tokenAbi3);
      //para
      
      crudContract.setProvider(that.web3Provider);

      crudContract.deployed().then(function(instance) 
      {  //
          console.log("ENTRO A CRUDD..:")
          //return instance.transferFund(
          return instance.create(
            //_transferTo,
            _valor,
            {
              from:_transferFrom,
              
            });
          //definicion de instance
        }).then(function(status) {
          if(status) {
            return resolve({status:true});
          }
        }).catch(function(error){
          console.log(error);

          return reject("Error in transfer value!!");
        });
    });
  
  }//fin transfer valor

  create_misura(_tariffa,_categoriaContabile,
    _descrizione,_percentuale,_riserva,_transferFrom
    
  ) {
 console.log("arrivato Valori------")
    console.log(_tariffa)
    console.log(_categoriaContabile)
    console.log(_descrizione)
    console.log(_percentuale)
    console.log(_riserva)
    console.log(_transferFrom)
    let that = this;

    return new Promise((resolve, reject) => {
      
      let misureContract = TruffleContract(tokenAbi3);
      //para
      
      misureContract.setProvider(that.web3Provider);

      misureContract.deployed().then(function(instance) 
      {  
          //return instance.transferFund(
          return instance.create(
            _tariffa,_categoriaContabile,
            _descrizione,_percentuale,_riserva,
            {
              from:_transferFrom,gas:3000000
              
            });
          //definicion de instance
        }).then(function(status) {

          if(status) {
            return resolve({status:true});
          }
        }).catch(function(error){
          console.log(error);

          return reject("Errore in transfer valori!!");
        });
    });
  
  }//fin transfer valor


  transferEther(
    _transferFrom,
    _transferTo,
    _amount,
    _remarks
  ) {
    let that = this;

    return new Promise((resolve, reject) => {
      
      let paymentContract = TruffleContract(tokenAbi3);
      //para
      // let crudContract = TruffleContract(tokenAbi2);
      paymentContract.setProvider(that.web3Provider);

      paymentContract.deployed().then(function(instance) 
      {
          return instance.transferFund(
            _transferTo,
            {
              from:_transferFrom,
              value:window.web3.toWei(_amount, "ether")
            });
          //definicion de instance
        }).then(function(status) {
          if(status) {
            return resolve({status:true});
          }
        }).catch(function(error){
          console.log(error);

          return reject("Error in transferEther service call");
        });
    });
  }//fin transfer ether

}