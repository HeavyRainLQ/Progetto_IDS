import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../ethcontract.service';
import { SqlServiceService } from '../sql-service.service';
import { MdbTableDirective, MdbTableService } from 'angular-bootstrap-md';

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
  

  constructor(private tableService: MdbTableService, private ethcontractService: EthcontractService, private SqlService: SqlServiceService) {
    this.defaultColDef = { sortable: true };
    this.genera_registro()
  }//fine constructor

  ngOnInit() {

  }//fine ngInit


  genera_registro() {

    this.SqlService.contabilita(100000).subscribe(data => {

      console.log("genera_registro....");
      console.log(data);

      this.registros = data["records"];

    });

  }//fine genera_attre

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

}
