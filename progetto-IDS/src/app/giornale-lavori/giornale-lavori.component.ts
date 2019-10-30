import { Component, OnInit } from '@angular/core';
import { OperaioModalComponent } from '.././operaio-modal/operaio-modal.component';
import {MatDialog} from '@angular/material';
import { EthcontractService } from '../ethcontract.service';
import { AgGridModule } from 'ag-grid-angular';
import { SqlServiceService } from '../sql-service.service';

import {MdbTableDirective,MdbTableService} from 'angular-bootstrap-md';


@Component({
  selector: 'app-giornale-lavori',
  templateUrl: './giornale-lavori.component.html',
  styleUrls: ['./giornale-lavori.component.css']
})
export class GiornaleLavoriComponent implements OnInit {

  lavori=[];
  attrezzature=[];
  parametriDoc=[];
  inserisce = "inserire";
  
  constructor(public dialog: MatDialog,private ethcontractService: EthcontractService,private SqlService: SqlServiceService )
  {
    this.parametriDoc=this.SqlService.parDocumenti;
    this.parametriDoc=this.parametriDoc[0];
   }//fine constructor

  ngOnInit(){

    this.generare(event);
    this.generare_attre(event);

  }//fine de init


openDialog(): void {
     
    //console.log(this.transferFrom);

    let dialogRef = this.dialog.open(OperaioModalComponent, {
     
      width: '750px',
      height: '500px',
      //data: {name: 'prueba'}
      panelClass: 'my-class', //style MisuraModal,class css in styles.css
      
      //data: {account:this.transferFrom}

    });

    dialogRef.afterClosed().subscribe(result => {
      this.generare(event);
    this.generare_attre(event);
      
    });
  }//fine open dialog


generare(event)
  {

 this.lavori=this.ethcontractService.getLavori();
}//fine generare

generare_attre(event)
{
 this.attrezzature=this.ethcontractService.getAttrezzature();
}//fine generare
can(azione) {	
  switch (this.SqlService.utente[0].tipo) {	
    case "1": {	
      //admin	
      return true;	
      break;	
    }	
    case "2": {	
      //rup	
      if (azione == "approvare") {	
        return true;	
      } 	
      break;	
    }	
    case "3": {	
      //direttore	
      if (azione == "invalidare" || azione == "inserire") {	
        return true;	
      } 	
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

}//fine della classe
