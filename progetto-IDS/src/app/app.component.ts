import { Component, OnInit} from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  disa: LogInComponent;
  title = 'progetto-IDS';
  constructor(private router: Router) {
   }
  
   ngOnInit(){

  //metodo preloader
  $(window).on('load', 
    function () {
      
  setTimeout(function () {
  $(".loader-page").css({visibility:"hidden",opacity:"0", })
  }, 700);// tempo del preloader
  
  });

    this.router.navigate(['/login']); 
  }
  
}
