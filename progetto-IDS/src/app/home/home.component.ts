import { Component, OnInit } from '@angular/core';
import { SqlServiceService } from '../sql-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parametriDoc=[];
  constructor(private SqlService: SqlServiceService) { 
    this.parametriDoc=this.SqlService.parDocumenti;
    this.parametriDoc=this.parametriDoc[0];
  }

  ngOnInit() {
  }

}
