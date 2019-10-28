import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../ethcontract.service';
import {SqlServiceService } from '../sql-service.service';
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
 
  

  constructor(private tableService: MdbTableService, private ethcontractService: EthcontractService, private SqlService: SqlServiceService) {
    this.defaultColDef = { sortable: true };
    
    this.parametriDoc=SqlService.parDocumenti;
    this.parametriDoc=this.parametriDoc[0];
    
    this.genera_registro()

    
    
  }//fine constructor

  ngOnInit()
  {
    
  }//fine ngInit


  genera_registro(){
    console.log(this.parametriDoc['budget']);
    this.SqlService.contabilita(this.parametriDoc['budget']).subscribe(data => {

  console.log("genera_registro....");
  console.log(data);

      this.registros = data["records"];

});

}//fine genera_attre

}
