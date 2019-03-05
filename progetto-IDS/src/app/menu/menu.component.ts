import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
collapse =false;
nascondi = '';
  constructor() { }

  ngOnInit() {
  }
navbar(){
  if(!this.collapse){
    this.nascondi = 'toggled';
    this.collapse = true;
  }else{
    this.nascondi= '';
    this.collapse = false;
    console.log('oooooo');
  }
}
}
