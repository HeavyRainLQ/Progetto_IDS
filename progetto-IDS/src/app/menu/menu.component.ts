import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import {Router} from '@angular/router';
>>>>>>> 80a8cc8cee45368d7efe82832fb461c5b6d96483

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
collapse = false;
nascondi = '';
arrow = 'arrowLeft';
<<<<<<< HEAD
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/area-riservata',{outlets:{ 'reserved': ['menu-iniziale']}}]);
=======
  constructor(private router: Router) 
  { }

  ngOnInit() {
    this.arrow = 'fas fa-times fa-2x';
    this.router.navigateByUrl("/area-riservata/(reserved:home)");
    
    //this.router.navigate(['/area-riservata']);
    //"['/area-riservata',{outlets:{ 'reserved': ['graph']}}]"
>>>>>>> 80a8cc8cee45368d7efe82832fb461c5b6d96483
  }
navbar(){
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
