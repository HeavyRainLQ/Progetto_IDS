import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { 


  }

  ngOnInit() {

$(window).on('load', 
    function (){
  	setTimeout(function () {
  	$(".loader-page").css({visibility:"hidden",opacity:"0",display:"none", })
  	}, 500);// tempo del preloader
  
  	});
  	
  }

}
