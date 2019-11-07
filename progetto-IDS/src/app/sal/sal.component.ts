import { Component, OnInit,HostListener, ViewChild } from '@angular/core';
import { ModalComponent } from '.././modal/modal.component';
import { MisuraModalComponent } from '.././misura-modal/misura-modal.component';

import { MatDialog } from '@angular/material';
import { EthcontractService } from '../ethcontract.service';
import { SqlServiceService } from '../sql-service.service';
import { AgGridModule } from 'ag-grid-angular';
import { Router,ActivatedRoute, } from '@angular/router';
import { MdbTableDirective, MdbTableService } from 'angular-bootstrap-md';
import { MatTableModule,MatTableDataSource } from '@angular/material';
import * as $ from 'jquery';


@Component({
  selector: 'app-sal',
  templateUrl: './sal.component.html',
  styleUrls: ['./sal.component.css']
})
export class SalComponent implements OnInit {


public isCollapsed: boolean = true;
  
    


  parametriDoc : any;
  sals:any;
  conta=["1","2","3"];

  ejemplo={"records":[
      [
        {"cod_sal":"1","data":"05/11/2019","tariffa":"01.01.001","categoria":"Struttura di fondazione","descrizione":"Fabbricato A","percentuale":"15.00","prezzo":"50000","prezzo_perc":"50.00","debito":"7500.00","debito_perc":"7.50","v_parziale":"7500.00"},
        {"cod_sal":"1","data":"05/11/2019","tariffa":"01.01.001","categoria":"Struttura di fondazione","descrizione":"Fabbricato B","percentuale":"10.00","prezzo":"50000","prezzo_perc":"50.00","debito":"5000.00","debito_perc":"5.00","v_parziale":"5000.00"}
    ],
        [
         {"cod_sal":"2","data":"05/11/2019","tariffa":"01.01.001","categoria":"Struttura di fondazione","descrizione":"Fabbricato A","percentuale":"15.00","prezzo":"50000","prezzo_perc":"50.00","debito":"7500.00","debito_perc":"7.50","v_parziale":"7500.00"},
         {"cod_sal":"2","data":"05/11/2019","tariffa":"01.01.001","categoria":"Struttura di fondazione","descrizione":"Fabbricato B","percentuale":"10.00","prezzo":"50000","prezzo_perc":"50.00","debito":"5000.00","debito_perc":"5.00","v_parziale":"5000.00"},
         {"cod_sal":"2","data":"05/11/2019","tariffa":"01.01.001","categoria":"Struttura di fondazione","descrizione":"Fabbricato C","percentuale":"20.00","prezzo":"50000","prezzo_perc":"50.00","debito":"10000.00","debito_perc":"10.00","v_parziale":"10000.00"}
      ]
  ]};

  ejemplo2={"records":[
       
        {"cod_sal":"1","data":"05/11/2019","tariffa":"01.01.001","categoria":"Struttura di fondazione","descrizione":"Fabbricato A","percentuale":"15.00","prezzo":"50000","prezzo_perc":"50.00","debito":"7500.00","debito_perc":"7.50","v_parziale":"7500.00"},
        {"cod_sal":"1","data":"05/11/2019","tariffa":"01.01.001","categoria":"Struttura di fondazione","descrizione":"Fabbricato B","percentuale":"10.00","prezzo":"50000","prezzo_perc":"50.00","debito":"5000.00","debito_perc":"5.00","v_parziale":"5000.00"}
    
  ]};

rows:any;
  
  constructor(private route:ActivatedRoute,private tableService: MdbTableService, public dialog: MatDialog, private ethcontractService: EthcontractService, private SqlService: SqlServiceService,private router: Router) {
    this.rows = this.ejemplo["records"];
    this.parametriDoc=this.SqlService.parDocumenti;
    this.parametriDoc=this.parametriDoc[0];
    
  }
  ngOnInit() {
  	this.generare();

    console.log("ROWSSSSSSSS",this.rows)

    $('.header').click(function(){

   // $(this).find('span').text(function(value){return value=='-'?'+':'-'});

    $(this).nextUntil('content').slideToggle(500, function(){
    });

  });

// $(".header").click(function () {

//     $header = $(this);
//     //getting the next element
//     $content = $header.next();
//     //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
//     $content.slideToggle(500, function () {
//         //execute this after slideToggle is done
//         //change text of header based on visibility of content div
//         $header.text(function () {
//             //change text based on condition
//             return $content.is(":visible") ? "Collapse" : "Expand";
//         });
//     });

// });




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}







  }//fine di ngOninit

  

  generare(){
   this.SqlService.sal(1).subscribe(data =>{ 
    
    console.log("generare SAL corretto..");
    console.log(data);
    // var keys=Object.case(JSON.parse(this.sals))
    // console.log("headers: ",keys);
    this.sals=data["records"];

    console.log("ORIGINAL...........",this.sals);
    });
	}//fine generare

}




