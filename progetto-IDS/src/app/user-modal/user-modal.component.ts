import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { SqlServiceService } from '../sql-service.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  description: string;
  result: Object;
  ruolo: any;
  tipi: any;

  //@Inject(MAT_DIALOG_DATA) public data:string;
  dati: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public router: Router, private user: SqlServiceService, public dialog: MatDialogRef<UserModalComponent>) {
    
    this.genera_tipi();
  }

  ngOnInit() {
    console.log("valor en modal:");
    console.log(this.data);

    //fin della data

  }// inicio de la aplicacion 



  save() {
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

    this.dati = {

      "col1": {
        // "id_user": this.user.utente[0].id_user,
        "nome": a2.value,
        "cognome": a3.value,
        "cod_fis": a4.value,
        "d_nasci": a5.value,
        "l_nasci": a6.value,
        "cap": a7.value,
        "resid": a8.value,
        "user2": a9.value,
        "pass2": a10.value,
        "tipo_user": this.ruolo.id_tipo_user,
      },

    }//fin della data
    //console.log(this.dati);


    this.user.insert_user(this.dati).subscribe(data => {
      console.log("entro sin error");
      console.log(data);

      //this.result = data["records"];
      //console.log($scope.result[0].ini);
      //var a=this.result[0].ini;




    });
    if (confirm("Conferma l'inserimento?")) {
      this.dialog.close();
    }
    
    // this.router.navigate(['/home']); 
  }//salvare valori, SQL UPDATE
  genera_tipi() {

    this.user.select_tipo_user().subscribe(data => {
      this.tipi = data["records"];

    });

  }
}
