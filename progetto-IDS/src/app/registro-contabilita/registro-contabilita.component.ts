import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../ethcontract.service';
import {SqlServiceService } from '../sql-service.service';
import {Web3Service } from '../web3.service';
import {MdbTableDirective,MdbTableService} from 'angular-bootstrap-md';


@Component({
  selector: 'app-registro-contabilita',
  templateUrl: './registro-contabilita.component.html',
  styleUrls: ['./registro-contabilita.component.css']
})
export class RegistroContabilitaComponent implements OnInit {

  registros: any;
  private defaultColDef;

  //variabili controllo azioni
  approva = "approvare";
  invalida = "invalidare";

  parametriDoc;

  title = 'your first DApp in Angular 7 ';
  accounts: any;
  transferFrom = '0x0';
  balance = '0 ETH';
  transferTo = '';
  amount = 0;
 
  public parziale:number;  
  public parziale_perc:number;  
  soglia:any;
  s_superata=true;
  cont_id_sal:any;

  constructor(private tableService: MdbTableService, private ethcontractService: EthcontractService, private SqlService: SqlServiceService,private Web3Service:Web3Service) {
    this.defaultColDef = { sortable: true };
    
    this.parametriDoc=SqlService.parDocumenti;
    this.parametriDoc=this.parametriDoc[0];
    
    this.calcolo();
    
    this.genera_registro();
    this.initAndDisplayAccount();
    // this.calcolo();
    this.cal_max();

    
  //   console.log("parziale %: ",this.parziale_perc)
  // console.log("parziale: ",this.parziale)
    
    
  }//fine constructor

  ngOnInit()
  {
    


  
  
  this.calcolo();
  
  
  
    
  }//fine ngInit

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


genera_registro(){
    console.log(this.parametriDoc['budget']);
    this.SqlService.contabilita(this.parametriDoc['budget']).subscribe(data => {

  console.log("genera_registro....");
  console.log(data);
      this.registros = data["records"];

});

}//fine genera_registro

get_soglia()
{

  console.log("parziale %: ",this.parziale_perc)
  console.log("parziale: ",this.parziale)
  console.log("superata: ",this.s_superata)
  
if (this.parziale!=0 ) 
{

  this.SqlService.select_soglia().subscribe(data =>{ 
    
  this.soglia=data["records"];
  console.log("soglie::",this.soglia);
  for (let a of this.soglia) 
  { console.log("soglia :",a.soglia, a.superata)
    if ( a.superata==0 ) 
    {   console.log("entro1 :",this.parziale)
       if ( this.parziale>=a.soglia ) 
        { console.log("entro2 :")
            this.s_superata=false;
            console.log("superata2: ",this.s_superata)
            break;
        }
        else{
         this.s_superata=true;
            break; 
        }
    }//fine if
  }

    });

  }//get_soglia
}//metodo soglia

salva_sal()
{
//valore parziale per approvazione
// approva daccordo alla soglia esempio 35000
//quando approva, modifica i dati del campo approva_sal, cosi 
//cancella tutti button nel libretto


let new_record=this.registros;
 console.log("new record:----",new_record);
      
for (let row of new_record) 
{

this.SqlService.select_descrizione(row['categoria'],row['descrizione'] ).subscribe(data =>{ 
let result = data["records"];
      
      var categoria=result[0].id_categoria;
      var descrizione=result[0].id_lavori;
//insert_sal(COD_SAL,DATA,CATEGORIA,DESCRIPCION,PERCENTUALE,PREZZO%,DEBITO,DEBITO% )
  this.SqlService.insert_sal(1,
    categoria,
    descrizione,
    row['percentuale'],
    row['prezzo_perc'],
    row['debito'],
    row['debito_perc']).subscribe(data =>{ 
    console.log("insert SAL SQL");
    });


    // var valor=this.Web3Service.numberToSigned64x64(35.6);
    // console.log("numero a 64x64: ",valor);
    // var valor1:number=this.Web3Service.signed64x64ToNumber(Number(valor));
    // console.log("64x64 a number: ",valor1);

   var a1= this.Web3Service.numberToSigned64x64(row['percentuale']);
   var a2=this.Web3Service.numberToSigned64x64(row['prezzo']);
   var a3=this.Web3Service.numberToSigned64x64(row['prezzo_perc']);
   var a4=this.Web3Service.numberToSigned64x64(row['debito']);
   var a5= this.Web3Service.numberToSigned64x64(row['debito_perc']);

this.ethcontractService.create_sal(
      
    1, //cod del Sal
    row['tariffa'],
    row['categoria'],
    row['descrizione'],
    a1,a2,a3,a4,a5,

      this.transferFrom,

    ).then(function () {

      console.log("funziona SAL")
    }).catch(function (error) {
      console.log(error);
    });


  });


}//fine del for

//SELECT DATE_FORMAT(now(),'%d/%m/%Y') as data FROM misura


    this.SqlService.updateApprova_sal().subscribe(data => {
     let prueba = data["records"];
      console.log(prueba)

    });

    this.ethcontractService.update_approva_sal(

      this.transferFrom,
    ).then(function(){
      console.log("funziona update sal")
    }).catch(function(error){
      console.log(error);
      console.log("false update sal")
      
    });


this.calcolo();

}//fine salva_statto avanzamento lavori

calcolo(){

  this.SqlService.select_parziale().subscribe(data => {
     this.parziale = data["records"][0].parziale;
      console.log(this.parziale);
      this.parziale_perc=Math.round(((this.parziale/100000)*100)*100 )/100;
      
  
      this.get_soglia();
    });

}//fine calcolo

cal_max(){
console.log("llegoooooooooo")
var conta=0;
  this.Web3Service.select_max().subscribe(data => {

     conta= data["records"][0].cod_sal;
      console.log(this.cont_id_sal);
    });
  this.cont_id_sal=conta;
  console.log("valor cod sal: ",this.cont_id_sal)

}//fine calcolo

can(azione) {
  switch (this.SqlService.utente[0].tipo) {	
    case "1": {	
      //admin	
      return true;	
      break;	
    }	
    case "2": {	
      //rup	
      if (azione == "approvare" || azione =="invalidare") {	
        return true;	
      }	
      break;	
    }	
    case "3": {	
      //direttore	
      return false;	
      break;	
    }	
    case "4": {	
      //ditta	
      return false;	
      break;	
    }	
    default: {	
      return false;	
      break;	
    }	
  }	
}


}//fine class export
