import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { SqlServiceService } from '../sql-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  collapse = false;
  nascondi = '';
  arrow = 'arrowLeft';
  tipoUtente: string;
  constructor(private router: Router, private user: SqlServiceService) { 
    this.arrow = 'fas fa-times fa-2x';
    this.router.navigateByUrl('/area-riservata/(reserved:home)');
    
  }

  ngOnInit() {
   
    this.tipoUtente = this.user.utente[0].nome + " " + this.user.utente[0].cognome;
    //this.router.navigate(['/area-riservata']);
    //"['/area-riservata',{outlets:{ 'reserved': ['graph']}}]"

    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
          $('#back-to-top').fadeIn();
          // $('#head_banner').css('display','none');
          // $('#nav_bar').css('position','fixed');
        } else {

          $('#back-to-top').fadeOut();
        }


      });
      // scroll body to 0px on click
    });  //final function scroll

    

  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 40); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 22);
  }

  navbar() {
    if (!this.collapse) {
      this.nascondi = 'toggled';
      this.arrow = 'fas fa-align-center fa-2x';
      this.collapse = true;
    } else {
      this.nascondi = '';
      this.arrow = 'fas fa-times fa-2x';
      this.collapse = false;
      //console.log('oooooo');
    }
  }
}
