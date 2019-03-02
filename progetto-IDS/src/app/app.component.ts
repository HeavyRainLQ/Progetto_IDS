import { Component, OnChanges, Input } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  disa: LogInComponent;
  title = 'progetto-IDS';
  constructor() {
//@Input() disa: LogInComponent;
   }
  ngOnChanges(){
  }
  log (){
    //return this.disa.disabilitato;

  }
}
