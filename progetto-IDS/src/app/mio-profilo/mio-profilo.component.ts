/*import { Component, OnInit } from '@angular/core';*/
import { Component, OnInit, Input, Injectable, OnDestroy, Output } from '@angular/core';
import {SqlServiceService } from '../sql-service.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { ModalComponent } from '.././modal/modal.component';


@Component({
  selector: 'app-mio-profilo',
  templateUrl: './mio-profilo.component.html',
  styleUrls: ['./mio-profilo.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class MioProfiloComponent implements OnInit {

  user1="admin";
  pass1="080994";
  result:Object;

  
  ci="";
  nome="";
  cognome="";
  cod_fis="";
  d_nasci="";
  l_nasci="";
  cap="";
  resid="";
  user2="";
  pass2="";

  constructor(private router: Router,private user:SqlServiceService,public dialog: MatDialog) { }
  
  ngOnInit() {

    
    this.user.mio_profilo(this.user1,this.pass1).subscribe(data =>{ 
      console.log("entro sin error");
      console.log(data);
  
        this.result = data["records"];
        //console.log($scope.result[0].ini);
        var a=this.result[0].ini;

        
  this.ci=this.result[0].iden;
  this.nome=this.result[0].nome;
  this.cognome=this.result[0].cognome;
  this.cod_fis=this.result[0].cod_fis;
  this.d_nasci=this.result[0].d_nasci;
  this.l_nasci=this.result[0].lug_nasci;
  this.cap=this.result[0].cap;
  this.resid=this.result[0].resid;
  this.user2=this.result[0].user;
  this.pass2=this.result[0].pass;
      });

  }//fin de ngoninit


  
  openDialog(): void {
     
  
    
        let dialogRef = this.dialog.open(ModalComponent, {
         
          width: '425px',
          height: '560px',
          //data: {name: 'prueba'}
          data: {
          
            ci:this.ci,
            nome:this.nome,
            cognome:this.cognome,
            cod_fis:this.cod_fis,
            d_nasci:this.d_nasci,
            l_nasci:this.l_nasci,
            cap:this.cap,
            resid:this.resid,
            user2:this.user2,
            pass2:this.pass2
          
          }//fin della data
    
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          
        });
      }


}//fin de la clase
