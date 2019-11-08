import { Component, OnInit, Inject, Input } from '@angular/core';
import { EthcontractService } from '../ethcontract.service';
import { SqlServiceService } from '../sql-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-operaio-modal',
  templateUrl: './operaio-modal.component.html',
  styleUrls: ['./operaio-modal.component.css']
})
export class OperaioModalComponent implements OnInit {
  maxDate = new Date();
  today = new FormControl(new Date());

  form: FormGroup;
  ore = [
    { number: "1" }, { number: "2" },
    { number: "3" }, { number: "4" },
    { number: "5" }, { number: "6" },
    { number: "7" }, { number: "8" },
  ];
  //variabili della modale
  nome: string;
  quantita: string;
  opQual: any;
  cognome: string;
  qualifica: string;
  qualificaId: any;
  descrizione:any;
  transferFrom = '0x0';
  balance = '0 ETH';
  prueba = [];
  attre: any;
  qualifiche: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ethcontractService: EthcontractService, private SqlService: SqlServiceService,public fb: FormBuilder) {
    this.form = this.fb.group({
      desc: ['', [Validators.required]],
      quantita: ['', [Validators.required]],
    });
    
    
    this.initAndDisplayAccount();
    //this.prueba=this.SqlService.select_attrezzatura();
    this.genera_attre();
    this.genera_qualifica();
  }

  ngOnInit() {
  }
  initAndDisplayAccount = () => {

    let that = this;
    this.ethcontractService.getAccountInfo().then(function (acctInfo: any) {

      that.transferFrom = acctInfo.fromAccount;
      that.balance = acctInfo.balance;

      console.log("cuenta:-  ", that.transferFrom)
      console.log("cantidad de gas:-  ", that.balance)


    }).catch(function (error) {
      console.log(error);
    });


  }; //fin de INIT


  salva_operaio() {

    let ore = (<HTMLSelectElement>document.getElementById('ore_presenza')).value;
    let data_picker = (<HTMLSelectElement>document.getElementById('data_picker')).value;

    var unixtime = Date.parse(data_picker) / 1000
    console.log(unixtime)

    console.log("datos operai-----------")
    console.log(this.nome)
    console.log(this.cognome)
    // var qualifica = (<HTMLSelectElement>document.getElementById('qualifica')).value;

    console.log(this.opQual.id_qualifica)
    console.log(this.opQual.nome_qual)
    console.log(this.descrizione)
    console.log(ore)
    console.log(data_picker)
    console.log(unixtime)
    //this.ethcontractService.create_misura(this.tariffa,val_cat,val_lav,this.percentuale,this.riserva,this.data.account);
    let that = this;
    //deployed contract

    //var unixtime = Date.parse("24-Nov-2009 17:57:35").getTime()/1000
    this.ethcontractService.create_operaio(
      //variabili da inviare
      this.nome,
      this.cognome,
      this.opQual.nome_qual,
      // qualifica,
      //this.descrizione,
      ore,
      unixtime,//DATA 

      this.transferFrom
    ).then(function () {

      console.log("funziona contract operai")
    }).catch(function (error) {
      console.log(error);
      console.log("FALSE OPERAIO")

    });

    //finisce lavoro smartcontract

    // this.SqlService.insert_misura(this.tariffa,a,b,this.percentuale,this.riserva).subscribe(data =>{ 
    //     console.log("insert corretto..");
    //     console.log(data);      
    //     });

    // this.SqlService.insert_operaio(this.nome,this.cognome,qualifica).subscribe(data => {
    //   console.log(data);

    // this.salva_attrezza(event);


    this.SqlService.insert_operaio(this.nome, this.cognome, this.opQual.id_qual).subscribe(data => {
      console.log(data);
    }
    ); 
  }//FINE SALVA OPERAIO


  

  genera_attre() {

    this.SqlService.select_attrezzatura().subscribe(data => {
      this.attre = data["records"];
    });

  }//fine genera_attre
  genera_qualifica() {

    this.SqlService.select_qualifica().subscribe(data => {
      this.qualifiche = data["records"];

    });

  }//fine genera_qualifica

  salva_des() {
    if (this.descrizione != "") {

      let data_picker = (<HTMLSelectElement>document.getElementById('data_picker')).value;
      var unixtime = Date.parse(data_picker) / 1000

      this.ethcontractService.create_giornale(
        //variabili da inviare
        unixtime,//DATA in unix
        this.descrizione,

        this.transferFrom
      ).then(function () {

        console.log("funziona contract descrizione")
      }).catch(function (error) {
        console.log(error);
        console.log("FALSE descrizione")

      });

    }//fine if

  }//fine del salva descrizione loca

  salva_attrezza() {

    let ore = (<HTMLSelectElement>document.getElementById('ore_presenza')).value;
    let data_picker = (<HTMLSelectElement>document.getElementById('data_picker')).value;

    var unixtime = Date.parse(data_picker) / 1000

    var tipologia = (<HTMLSelectElement>document.getElementById('tipologia')).value;
    //this.ethcontractService.create_misura(this.tariffa,val_cat,val_lav,this.percentuale,this.riserva,this.data.account);
    let that = this;

    this.ethcontractService.create_attrezza(
      //variabili da inviare
      tipologia,
      this.quantita,
      unixtime,//DATA in unix

      this.transferFrom
    ).then(function () {

      console.log("funziona contract attrezzatura")
    }).catch(function (error) {
      console.log(error);
      console.log("FALSE attrezza")

    });


  }//FINE SALVA attrezzatura

  salvaTutto(){
    this.salva_attrezza();
    this.salva_des();
    this.salva_operaio();


  }





}
