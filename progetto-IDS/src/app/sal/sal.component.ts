import { Component, OnInit } from '@angular/core';
import {SqlServiceService } from '../sql-service.service';
import { EthcontractService } from '../ethcontract.service';
import {MdbTableDirective,MdbTableService} from 'angular-bootstrap-md';

@Component({
  selector: 'app-sal',
  templateUrl: './sal.component.html',
  styleUrls: ['./sal.component.css']
})
export class SalComponent implements OnInit {

  constructor(private tableService: MdbTableService, private ethcontractService: EthcontractService, private SqlService: SqlServiceService) 
  { 

  }//fine constructor

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
