import { Component, OnInit,HostListener, ViewChild } from '@angular/core';
import { ModalComponent } from '.././modal/modal.component';
import { MisuraModalComponent } from '.././misura-modal/misura-modal.component';

import { MatDialog } from '@angular/material';
import { EthcontractService } from '../ethcontract.service';
import { SqlServiceService } from '../sql-service.service';
import { AgGridModule } from 'ag-grid-angular';
import { Router,ActivatedRoute, } from '@angular/router';
import { MdbTableDirective, MdbTableService } from 'angular-bootstrap-md';


@Component({
  selector: 'app-libretto-delle-misure',
  templateUrl: './libretto-delle-misure.component.html',
  styleUrls: ['./libretto-delle-misure.component.css']
})

export class LibrettoDelleMisureComponent implements OnInit {



  elements: any = [
    { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];


  title = 'your first DApp in Angular 7 ';
  accounts: any;
  transferFrom = '0x0';
  balance = '0 ETH';
  transferTo = '';
  amount = 0;
  remarks = '';
  valor = "";
  private defaultColDef;
  

  searchText: string = '';
  previous: string;


  //variabili per controllo permessi
  approva = "approvare";
  invalida = "invalidare";
  riserva = "riserva";
  inserisce = "inserire misura";
  parametriDoc=[];

  constructor(private route:ActivatedRoute,private tableService: MdbTableService, public dialog: MatDialog, private ethcontractService: EthcontractService, private SqlService: SqlServiceService,private router: Router) {
    this.initAndDisplayAccount();
    this.defaultColDef = { sortable: true };
    this.generare(event);
    this.parametriDoc=this.SqlService.parDocumenti;
    this.parametriDoc=this.parametriDoc[0];
   

    

  }

  @HostListener('input') oninput() {
    // this.searchItems();
  }


  initAndDisplayAccount = () => {

    let that = this;
    this.ethcontractService.getAccountInfo().then(function (acctInfo: any) {

      console.log(acctInfo);
      that.transferFrom = acctInfo.fromAccount;
      that.balance = acctInfo.balance;

      console.log("cuenta:-  ", that.transferFrom)
      console.log("cantidad de gas:-  ", that.balance)


    }).catch(function (error) {
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


  colors = [
    { id: 1, name: "red" },
    { id: 2, name: "blue" },
    { id: 3, name: "yellow" },
  ];
  prueba = 'prueba pasar valor';
  user: string;
  misures = [];
  ngOnInit() {

    

  }
  onReload(){
    this.router.navigate(['/servers'],{relativeTo:this.route})
   }




  openDialog(): void {

    console.log(this.transferFrom);

    let dialogRef = this.dialog.open(MisuraModalComponent, {

      width: '520px',
      height: '420px',
      //data: {name: 'prueba'}
      panelClass: 'my-class', //style MisuraModal,class css in styles.css

      data: { account: this.transferFrom }

    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.generare(event);

    });
  }//fine open dialog

  generare(event) {

    this.misures = this.ethcontractService.getValori();
    console.log("prende il valore----")
    console.log(this.misures)

    // this.ethcontractService.getValori().subscribe(data=>{
    //   console.log("prende il valore----")
    //   console.log(data)
    // });
  }//fine generare

  approvare(selectedItem: any) {
    console.log(selectedItem);
    console.log(this.misures.length);
    console.log(this.misures[selectedItem.id].aprovata);
    console.log("Selected item Id: ", selectedItem.id); // You get the Id of the selected item here
    for (var i = 0; i < this.misures.length; i++) {
      if (this.misures[i].id == selectedItem.id && this.misures[i].valida == true) {
        this.misures[i].aprovata = true;
      }
    }//fine for
    console.log(this.misures)
    let prueba;
    var numero = selectedItem.id + 1

    this.SqlService.updateApprova(numero).subscribe(data => {

      console.log("genera_registro....");
      prueba = data["records"];
      console.log(prueba)

    });


    this.ethcontractService.update_approva(
      selectedItem.id,
      selectedItem.aprovata,
      this.transferFrom,
    ).then(function(){
      console.log("funziona update")
    }).catch(function(error){
      console.log(error);
      console.log("false update")
      
    });



  }//fine approvare


  invalidare(selectedItem: any) {
    console.log(selectedItem);
    console.log(this.misures.length);
    console.log(this.misures[selectedItem.id].aprovata);
    console.log("Selected item Id: ", selectedItem.id); // You get the Id of the selected item here
    for (var i = 0; i < this.misures.length; i++) {
      if (this.misures[i].id == selectedItem.id) {
        this.misures[i].valida = false;
      }
    }//fine for
    console.log(this.misures)
    let prueba;
    var numero = selectedItem.id + 1

    console.log("update in SQL----------")
    console.log(numero)
    this.SqlService.updateInvalida(numero).subscribe(data => {

      console.log("genera_registro....");
      prueba = data["records"];
      console.log(prueba)

    });

    this.ethcontractService.update_valida(
      selectedItem.id,
      false,
      this.transferFrom,
    ).then(function(){
      console.log("funziona update")
    }).catch(function(error){
      console.log(error);
      console.log("false update")
      
    });


  }//fine invalidare

  // canApprovare() {
  //   switch (this.SqlService.utente[0].tipo) {
  //     case "1": {
  //       return true;
  //       break;
  //     }
  //     case "2": {
  //       return true;
  //       break;
  //     }
  //     case "3": {
  //       return false;
  //       break;
  //     }
  //     case "4": {
  //       return false;
  //       break;
  //     }
  //     default: {
  //       return false;
  //       break;
  //     }
  //   }
  // }

  // canInvalidare() {
  //   switch (this.SqlService.utente[0].tipo) {
  //     case "1": {
  //       return true;
  //       break;
  //     }
  //     case "2": {
  //       return false;
  //       break;
  //     }
  //     case "3": {
  //       return true;
  //       break;
  //     }
  //     case "4": {
  //       return false;
  //       break;
  //     }
  //     default: {
  //       return false;
  //       break;
  //     }
  //   }
  // }

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
        if (azione == "invalidare" || azione == "inserire misura") {
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

}

