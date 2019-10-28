import { Component, OnInit, Input, Injectable, OnDestroy, Output ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SqlServiceService } from '../sql-service.service';
import { Web3Service } from '../web3.service';
import * as jQuery from 'jquery';
import { MenuComponent } from '.././menu/menu.component';




@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LogInComponent implements OnInit{

  message: string ="hola mundo";
  

  loginForm: FormGroup;
  disabilitato: boolean;

  
  risposta = " ";
  //public servicio:SqlServiceService;
  constructor(private formBuilder: FormBuilder, private router: Router, private user: SqlServiceService,private sender: Web3Service) 
  {
     
  }//fine constructor

  ngOnInit() {

    /*$(document).ready(() => {
      $('.loader-page').css({'visibility': 'hidden', 'opacity': '0'});
    });*/


    // inicia valores con campos vacios
    this.disabilitato = true;
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  
  
  user1: string;
  pass1: string;
  result: Object;
  logIn() {

  //this.user.sendMessage('Message from Home Component to App Component!');
//  this.sender.sendMessage('Message from Home Component to App Component!');

    this.user.getSomeData(this.user1, this.pass1).subscribe(data => {
      console.log(data);

      this.result = data["records"];
      //console.log($scope.result[0].ini);
      var a = this.result[0].ini;
      if (a == "true") {

//        confirm(" Benvenuto !!");
        if (this.result[0].estado == "1") {
          if (this.result[0].tipo == "1") {
            //$rootScope.user = true;
            //console.log($rootScope.user);
            //location.href='#/main';       
            this.router.navigate(['/area-riservata']);
          }
          else {
            //$rootScope.user = false;
            //location.href='#/main';
            this.router.navigate(['/area-riservata']);
          }
        }
        else {
          this.risposta = "Sorry, account disabled!";
        }

      }
      else {
        this.user1 = "";
        this.pass1 = "";
        this.risposta = "Sorry, error user or password!";
      }
    });

    console.log(this.loginForm.controls.username.value);
    console.log(this.loginForm.controls.password.value);

  }
  //--------------------------------




  //---------------------------------

  login_user(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username')
    const pass = target.querySelector('#pasword')

    console.log(username, pass)
  }

}
