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

  budget=100000;
    oggetto="Costruzione di un complesso di fabbricati destinati ad abitazione ed negozi nel centro urbano del Comune di Ancona.";
    ditta="La Distruttoria s.r.l.";
    committente="Sviluppo Anconetano s.r.l.";
  
  

  constructor(private tableService: MdbTableService, private ethcontractService: EthcontractService, private SqlService: SqlServiceService) {
    this.defaultColDef = { sortable: true };
    this.genera_registro()
  }//fine constructor

  ngOnInit()
  {

  }//fine ngInit


  genera_registro()
  {
    this.SqlService.contabilita(this.budget).subscribe(data => {
  console.log("genera_registro....");
  console.log(data);
      this.registros = data["records"];

});

}//fine genera_registro

salva_sal()
{

  
 let new_record=this.registros;
 console.log("new record:----",new_record);
      
for (let row of new_record) 
{

this.SqlService.select_descrizione(row['categoria'],row['descrizione'] ).subscribe(data =>{ 
let result = data["records"];
      
      var a=result[0].id_categoria;
      var b=result[0].id_lavori;
//insert_sal(COD_SAL,DATA,CATEGORIA,DESCRIPCION,PERCENTUALE,PREZZO%,DEBITO,DEBITO% )
  this.SqlService.insert_sal(1,
    a,
    b,
    row['percentuale'],
    row['prezzo_perc'],
    row['debito'],
    row['debito_perc']).subscribe(data =>{ 
    
    console.log("insert SAL corretto..");
    console.log(data);
    });
  });
}//fine del for

//     this.SqlService.contabilita(this.budget).subscribe(data => {
//   console.log("genera_registro....");
//   console.log(data);
//       this.registros = data["records"];

// });

//SELECT DATE_FORMAT(now(),'%d/%m/%Y') as data FROM misura
}//fine salva_statto avanzamento lavori


}//fine class export
