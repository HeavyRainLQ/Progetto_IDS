import { Component, OnInit,Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import {SqlServiceService } from '../sql-service.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
 


//  @Input() info1:string;
// @Input() info2:string;
description:string;
result:Object;

//@Inject(MAT_DIALOG_DATA) public data:string;
dati: any;

constructor(@Inject(MAT_DIALOG_DATA) public data: any,private user:SqlServiceService,public dialog: MatDialogRef<ModalComponent>) 
{
    
}

  ngOnInit() 
  {
    console.log("valor en modal:");
    console.log(this.data);

    this.dati= {
          
      "col1":{
      "ci": this.data.ci,
      "nome":this.data.nome,
      "cognome":this.data.cognome,
      "cod_fis":this.data.cod_fis,
      "d_nasci":this.data.d_nasci,
      "l_nasci":this.data.l_nasci,
      "cap":this.data.cap,
      "resid":this.data.resid,
      "user2":this.data.user2,
      "pass2":this.data.pass2
    },
    
    }//fin della data

  }// inicio de la aplicacion 



save()
{
  var $ = (id) => document.getElementById(id);
  var a1: HTMLInputElement = <HTMLInputElement>$('ci');
  var a2: HTMLInputElement = <HTMLInputElement>$('nome');
  var a3: HTMLInputElement = <HTMLInputElement>$('cognome');
  var a4: HTMLInputElement = <HTMLInputElement>$('cod_fis');
  var a5: HTMLInputElement = <HTMLInputElement>$('d_nasci');
  var a6: HTMLInputElement = <HTMLInputElement>$('l_nasci');
  var a7: HTMLInputElement = <HTMLInputElement>$('cap');
  var a8: HTMLInputElement = <HTMLInputElement>$('resid');
  var a9: HTMLInputElement = <HTMLInputElement>$('user');
  var a10: HTMLInputElement = <HTMLInputElement>$('pass');

  this.dati= {
          
    "col1":{
    "ci":  a1.value,
    "nome":a2.value,
    "cognome":a3.value,
    "cod_fis":a4.value,
    "d_nasci":a5.value,
    "l_nasci":a6.value,
    "cap":a7.value,
    "resid":a8.value,
    "user2":a9.value,
    "pass2":a10.value
  },
  
  }//fin della data
  //console.log(this.dati);

  
  this.user.update_info(this.dati).subscribe(data =>{ 
    console.log("entro sin error");
    console.log(data);

      //this.result = data["records"];
      //console.log($scope.result[0].ini);
      //var a=this.result[0].ini;

      


    });
    if(confirm("Conferma il update?")){
     this.dialog.close();
    }

}//salvare valori, SQL UPDATE

}
