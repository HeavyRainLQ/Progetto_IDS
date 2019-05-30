import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
collapse = false;
nascondi = '';
arrow = 'arrowLeft';
  constructor(private router: Router) 
  { }

  ngOnInit() {
    this.arrow = 'fas fa-times fa-2x';
    this.router.navigateByUrl("/area-riservata/(reserved:home)");
    
    //this.router.navigate(['/area-riservata']);
    //"['/area-riservata',{outlets:{ 'reserved': ['graph']}}]"
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
