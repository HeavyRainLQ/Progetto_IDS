import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
collapse = false;
nascondi = '';
arrow = 'arrowLeft';
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/area-riservata',{outlets:{ 'reserved': ['menu-iniziale']}}]);
  }
navbar(){
  if (!this.collapse) {
    this.nascondi = 'toggled';
    this.arrow = 'arrowRight';
    this.collapse = true;
  } else {
    this.nascondi = '';
    this.arrow = 'arrowLeft';
    this.collapse = false;
  }
}
}
