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

<<<<<<< HEAD
registros:any;
private defaultColDef; 
  constructor(private tableService: MdbTableService,private ethcontractService: EthcontractService,private SqlService: SqlServiceService ) 
  { 
  	this.defaultColDef = { sortable: true };
  	this.genera_registro()
=======
  registros: any;
  private defaultColDef;

  //variabili controllo azioni
  approva = "approvare";
  invalida = "invalidare";

  budget=100000;
    oggetto="Costruzione di un complesso di fabbricati destinati ad abitazione ed negozi nel centro urbano del Comune di Ancona.";
    ditta="La Distruttoria s.r.l.";
    committente="Sviluppo Anconetano s.r.l.";
  
  

  constructor(private tableService: MdbTableService, private ethcontractService: EthcontractService, private SqlService: SqlServiceService) {
    this.defaultColDef = { sortable: true };
    this.genera_registro()
>>>>>>> 9cb38bd52bbf1d7276a27de36adffe98fd58ed68
  }//fine constructor

  ngOnInit()
  {

  }//fine ngInit


  genera_registro(){

<<<<<<< HEAD
  this.SqlService.contabilita(100000).subscribe(data =>{ 
=======
    this.SqlService.contabilita(this.budget).subscribe(data => {
>>>>>>> 9cb38bd52bbf1d7276a27de36adffe98fd58ed68

  console.log("genera_registro....");
  console.log(data);

      this.registros = data["records"];

});

}//fine genera_attre

}
