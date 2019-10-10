import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '.././modal/modal.component';
import { MisuraModalComponent } from '.././misura-modal/misura-modal.component';

import {MatDialog} from '@angular/material';
import { EthcontractService } from '../ethcontract.service';

@Component({
  selector: 'app-libretto-delle-misure',
  templateUrl: './libretto-delle-misure.component.html',
  styleUrls: ['./libretto-delle-misure.component.css']
})

export class LibrettoDelleMisureComponent implements OnInit {

  title = 'your first DApp in Angular 7 ';
  accounts:any;
  transferFrom = '0x0';
  balance ='0 ETH';
  transferTo='';
  amount=0;
  remarks='';
  valor="";
  

  constructor(public dialog: MatDialog,private ethcontractService: EthcontractService )
  {
    this.initAndDisplayAccount();

  }
  initAndDisplayAccount = () => {

    let that = this;
    this.ethcontractService.getAccountInfo().then(function(acctInfo : any)
     {
      
      console.log(acctInfo);
      that.transferFrom = acctInfo.fromAccount;
      that.balance = acctInfo.balance;

      console.log("cuenta:-  ",that.transferFrom)
      console.log("cantidad de gas:-  ",that.balance)


    }).catch(function(error){
      console.log(error);
    });

    

  }; //fin de INIT

   /* campi del libretto
   uint id;
   string tariffa;
   string data;
   string categoriaContabile;
   string descrizione;
   uint percentuale;
   string riserva;
   */


colors=[
{id: 1, name: "red"  },
{id: 2, name: "blue"  },
{id: 3, name: "yellow"  },
];
prueba = 'prueba pasar valor';
user:string;

  ngOnInit() 
  {

  }

  openDialog(): void {
     
    console.log(this.transferFrom);

    let dialogRef = this.dialog.open(MisuraModalComponent, {
     
      width: '520px',
      height: '530px',
      //data: {name: 'prueba'}
      panelClass: 'my-class', //style MisuraModal,class css in styles.css
      
      data: {account:this.transferFrom}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }//fine open dialog

  generare()
  {

     let that = this;
    this.ethcontractService.getValori().then(function()
     {
      
      console.log("prende il valore----")



    }).catch(function(error){
      console.log(error);
    });

    //fine generare
  }
}