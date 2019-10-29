import { Injectable } from '@angular/core';
import Web3 from 'web3';
import TruffleContract from 'truffle-contract';


declare let require: any;
declare let window: any;
//let tokenAbi = require('../../../build/contracts/Payment.json');
//let tokenAbi2 = require('../../../build/contracts/Crud.json');
let tokenAbi3 = require('../../../build/contracts/librettoMisure.json');
let tokenAbi4 = require('../../../build/contracts/giornaleLavori.json');

@Injectable({
  providedIn: 'root'
})

export class EthcontractService {
  private web3Provider: any;
  private contracts: {};

  length: '';



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

  getAccountInfo() {
    console.log("llega peroooo:")
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase(function (err, account) {
        console.log(account)

        if (err === null) {
          account = window.web3.eth.accounts[2];
          window.web3.eth.getBalance(account, function (err, balance) {
            if (err === null) {
              return resolve({ fromAccount: account, balance: (window.web3.fromWei(balance, "ether")).toNumber() });
            }
            else {
              return reject({ fromAccount: "error", balance: 0 });
            }
          });
        }

      }); //getCOINbase

    });


  }//fin del metodo getACCOUNT




  getValori() {
    var electionInstance;
    let jsonArrayObject = [];

    //    let that = this;
    //return new Promise((resolve, reject) => {
    console.log("arrivato method reading")
    let crudContract = TruffleContract(tokenAbi3);
    //para
    crudContract.setProvider(this.web3Provider);
    crudContract.deployed().then(function (instance) {
      electionInstance = instance;
      //INDICE DEL VALOR DE USUARIOS
      electionInstance.read_size().then(function (size) {
        var length = size['c']['0'];
        for (var i = 0; i < length; i++) {
          //var size3=size2['BigNumber'];
          electionInstance.misures(i).then(function (user) {
            var date = new Date(user[2]['c'][0] * 1000);
            var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
            jsonArrayObject.push({ id: user[0]['c'][0], tariffa: user[1], data: formattedDate, categoria: user[3], descrizione: user[4], percentuale: user[5]['c'][0], riserva: user[6], aprovata: user[7], valida: user[8] });
            // Render misures Resul          
          });//fine de misures

        }//fine del for 
      });

    });
    //});
    console.log("JSON cargado--------------")
    return jsonArrayObject;
  }//fin del metodo get VALOR



  getLavori() {
    var lavoriInstance;
    let jsonObject = [];

    let crudContract = TruffleContract(tokenAbi4);
    //para
    crudContract.setProvider(this.web3Provider);
    crudContract.deployed().then(function (instance) {
      lavoriInstance = instance;
      //INDICE DEL VALOR DE USUARIOS
      lavoriInstance.read_size().then(function (size) {
        var length = size['1']['c']['0']; //lunghezza del vettore

        for (var i = 0; i < length; i++) {
          //var size3=size2['BigNumber'];
          lavoriInstance.operaios(i).then(function (operaio) {

            var date = new Date(operaio[4]['c'][0] * 1000);
            var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();

            jsonObject.push({ nome: operaio[0], cognome: operaio[1], qualifica: operaio[2], ore: operaio[3]['c'][0], data: formattedDate });
            // Render misures Resul          
          });//fine de misures

        }//fine del for 
      });//fine read_size

    });
    //});
    return jsonObject;
  }//fin del metodo get Lavori


  getAttrezzature() {
    var attreInstance;
    let jsonObject = [];

    let attreContract = TruffleContract(tokenAbi4);
    //para
    attreContract.setProvider(this.web3Provider);
    attreContract.deployed().then(function (instance) {
      attreInstance = instance;
      //INDICE DEL VALOR DE USUARIOS
      attreInstance.read_size().then(function (size) {
        var length = size['2']['c']['0']; //lunghezza del vettore

        for (var i = 0; i < length; i++) {
          //var size3=size2['BigNumber'];
          attreInstance.attrezzaturas(i).then(function (attrezza) {
            var date = new Date(attrezza[2]['c'][0] * 1000);
            var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();

            jsonObject.push({ tipologia: attrezza[0], data: formattedDate, quantita: attrezza[1]['c'][0] });
            // Render misures Resul          
          });//fine de misures

        }//fine del for 
      });//fine read_size

    });
    return jsonObject;
  }//fin del metodo get attrezzature



  getValor() {
    var electionInstance;

    let that = this;
    return new Promise((resolve, reject) => {

      console.log("LLEGO A MOSTRARRR")
      let crudContract = TruffleContract(tokenAbi3);
      //para
      crudContract.setProvider(that.web3Provider);
      crudContract.deployed().then(function (instance) {
        electionInstance = instance;
        //INDICE DEL VALOR DE USUARIOS

        electionInstance.users(3).then(function (user) {
          var valor1 = user[0];
          var valor2 = user[1]; //NOMBRE DEL USUARIO


          console.log("valor recuperado--: ")
          console.log(valor1);
          console.log(valor2);


          // Render candidate Result

        });

      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
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

      crudContract.deployed().then(function (instance) {  //
        console.log("ENTRO A CRUDD..:")
        //return instance.transferFund(
        return instance.create(
          //_transferTo,
          _valor,
          {
            from: _transferFrom,

          });
        //definicion de instance
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);

        return reject("Error in transfer value!!");
      });
    });

  }//fin transfer valor

  create_misura(_tariffa, _categoriaContabile,
    _descrizione, _percentuale, _riserva, _transferFrom

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

      misureContract.deployed().then(function (instance) {
        //return instance.transferFund(
        return instance.create(
          _tariffa, _categoriaContabile,
          _descrizione, _percentuale, _riserva,
          {
            from: _transferFrom, gas: 3000000

          });
        //definicion de instance
      }).then(function (status) {

        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);

        return reject("Errore in transfer valori!!");
      });
    });

  }//fine create misura

  create_operaio(
    _nome,
    _cognome,
    _qualifica,
    //_descrizione,
    _ore,
    _data,
    _transferFrom
  ) {
    console.log("arrivato Valori------")

    let that = this;

    return new Promise((resolve, reject) => {

      let operaioContract = TruffleContract(tokenAbi4);
      //para

      operaioContract.setProvider(that.web3Provider);

      operaioContract.deployed().then(function (instance) {
        //return instance.transferFund(
        return instance.createOperaio(
          _nome,
          _cognome,
          _qualifica,
          _ore,
          _data,
          {
            from: _transferFrom, gas: 3000000
          });
        //definicion de instance
      }).then(function (status) {

        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);

        return reject("Errore in transfer Operaio!!");
      });
    });


  }//fine create operaio


  update_approva(
    _id,
    _approva,
    _transferFrom) {
    console.log("arrivato Valori------")
    let that = this;
    return new Promise((resolve, reject) => {
      let misuraContract = TruffleContract(tokenAbi3);
      //para
      misuraContract.setProvider(that.web3Provider);
      misuraContract.deployed().then(function (instance) {
        //return instance.transferFund(
        return instance.update_approva(
          _id,
          _approva,
          {
            from: _transferFrom, gas: 3000000
          });
        //definicion de instance
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);
        return reject("Errore in update_approva!!");
      });
    });

  }//fine approva

  update_valida(
    _id,
    _valida,
    _transferFrom) {
    console.log("arrivato Valori------")
    let that = this;
    return new Promise((resolve, reject) => {
      let misuraContract = TruffleContract(tokenAbi3);
      //para
      misuraContract.setProvider(that.web3Provider);
      misuraContract.deployed().then(function (instance) {
        //return instance.transferFund(
        return instance.update_valida(
          _id,
          _valida,
          {
            from: _transferFrom, gas: 3000000
          });
        //definicion de instance
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);
        return reject("Errore in update_approva!!");
      });
    });

  }//fine valida

  create_attrezza(
    _tipologia,
    _quantita,
    _data,
    _transferFrom
  ) {


    let that = this;

    return new Promise((resolve, reject) => {

      let attrezzaContract = TruffleContract(tokenAbi4);
      //para

      attrezzaContract.setProvider(that.web3Provider);

      attrezzaContract.deployed().then(function (instance) {
        //return instance.transferFund(
        return instance.createAttrezzatura(
          _tipologia,
          _quantita,
          _data,
          {
            from: _transferFrom, gas: 10000000

          });
        //definicion de instance
      }).then(function (status) {

        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);

        return reject("Errore create attrezzatura!!");
      });
    });

  }//fine create attrezzatura



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

      paymentContract.deployed().then(function (instance) {
        return instance.transferFund(
          _transferTo,
          {
            from: _transferFrom,
            value: window.web3.toWei(_amount, "ether")
          });
        //definicion de instance
      }).then(function (status) {
        if (status) {
          return resolve({ status: true });
        }
      }).catch(function (error) {
        console.log(error);

        return reject("Error in transferEther service call");
      });
    });
  }//fin transfer ether

}
