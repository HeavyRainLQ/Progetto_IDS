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
  selector: 'app-sal',
  templateUrl: './sal.component.html',
  styleUrls: ['./sal.component.css']
})
export class SalComponent implements OnInit {

  parametriDoc : any;
  
  constructor(private route:ActivatedRoute,private tableService: MdbTableService, public dialog: MatDialog, private ethcontractService: EthcontractService, private SqlService: SqlServiceService,private router: Router) { 

    this.parametriDoc=this.SqlService.parDocumenti;
    this.parametriDoc=this.parametriDoc[0];
  }

  ngOnInit() {

  	this.generare();
  }
  generare(){
   this.SqlService.sal(1).subscribe(data =>{ 
    
    console.log("generare SAL corretto..");
    console.log(data);
    });
	}//fine generare

}
