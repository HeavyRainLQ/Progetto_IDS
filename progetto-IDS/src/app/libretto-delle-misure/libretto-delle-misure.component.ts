import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '.././modal/modal.component';

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
     
console.log("el valor---:: ");
console.log(this.user);


    let dialogRef = this.dialog.open(ModalComponent, {
     
      width: '450px',
      height: '620px',
      //data: {name: 'prueba'}
      data: {name: this.user }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}