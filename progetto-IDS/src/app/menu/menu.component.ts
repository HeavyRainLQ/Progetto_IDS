import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { SqlServiceService } from '../sql-service.service';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserModalComponent } from '.././user-modal/user-modal.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  collapse = false;
  nascondi = '';
  arrow = 'arrowLeft';
  admin: boolean;
  tipoUtente: string;
  nome: string
  constructor(private router: Router, private utente: SqlServiceService, public dialog: MatDialog) {
    this.arrow = 'fas fa-times fa-2x';
    // this.router.navigate("/area-riservata/(reserved:home)");
    // this.router.navigate(['/area-riservata/(reserved:home)']);
    setTimeout(() => {  
    this.getNomeUtente();
  }, 500);
    setTimeout(() => {    //<<<---    using ()=> syntax
      this.router.navigate(['/area-riservata/', { outlets: { reserved: 'home' } }]);
    }, 500);
    // setInterval(() = >this.router.navigate(['/area-riservata/',{ outlets: { reserved: 'home'}}]), 2000);
    // this.router.navigate(['/area-riservata/',{ outlets: { reserved: 'home'}}]);


  }

  ngOnInit() {
    //this.router.navigate(['/area-riservata']);
    //"['/area-riservata',{outlets:{ 'reserved': ['graph']}}]"
    // this.router.navigate(['/area-riservata/,{ outlets: { reserved: [mio_profilo]}']);
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
    // this.getNomeUtente();
    // this.read_utente();
  }
  //  async read_utente(){
  //   this.tipoUtente = this.utente.utente[0].nome;
  //   }
  onActivate() {
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

  async getNomeUtente() {
    this.tipoUtente = this.utente.utente[0].nome + ' ' + this.utente.utente[0].cognome;
    this.nome = await this.utente.get_nome_utente();
    if (this.utente.utente[0].tipo == 1) {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

  nuovoUtente(): void {




    let dialogRef = this.dialog.open(UserModalComponent, {

      width: '425px',
      height: '560px',
      //data: {name: 'prueba'}
      // data: {

      //   // ci: this.ci,
      //   nome: this.nome,
      //   cognome: this.cognome,
      //   cod_fis: this.cod_fis,
      //   d_nasci: this.d_nasci,
      //   l_nasci: this.l_nasci,
      //   cap: this.cap,
      //   resid: this.resid,
      //   user2: this.user2,
      //   pass2: this.pass2

      // }//fin della data

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

}
