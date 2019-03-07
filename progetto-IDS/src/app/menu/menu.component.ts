import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
collapse = false;
nascondi = '';
arrow = 'arrowLeft';
  constructor() { }

  ngOnInit() {
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
    console.log('oooooo');
  }
}
}