import { Component, OnInit, Input, Injectable, OnDestroy, Output } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {SqlServiceService } from '../sql-service.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LogInComponent implements OnInit, OnDestroy 
{
  loginForm: FormGroup;
  @Input() username: string;
  @Input() password: string;
  disabilitato: boolean;
  
  message="Loading.... JOSE";
  risposta=" ";
  //public servicio:SqlServiceService;
 constructor(private formBuilder: FormBuilder, private router: Router,private user:SqlServiceService )  
 {
    
 }

  ngOnInit() {

    


  /*$(document).ready(() => {
    $('.loader-page').css({'visibility': 'hidden', 'opacity': '0'});
  });*/


// inicia valores con campos vacios
    this.disabilitato=true;
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
  });
  }
  ngOnDestroy(){

  }
  user1:string;
  pass1:string;
  result:Object;
  logIn() 
  {
  this.user.getSomeData(this.user1,this.pass1).subscribe(data =>{ 
    console.log(data);

      this.result = data["records"];
      //console.log($scope.result[0].ini);
      var a=this.result[0].ini;
      if (a=="true") 
      {
       
       confirm(" Benvenuto !!");
       if (this.result[0].estado=="1") 
       {    
         if (this.result[0].tipo=="1") 
           {
               //$rootScope.user = true;
               //console.log($rootScope.user);
               //location.href='#/main';       
               this.router.navigate(['/area-riservata']);
           }
           else
           {              
             //$rootScope.user = false;
             //location.href='#/main';
             this.router.navigate(['/area-riservata']);
           }
       }
       else
       {
           alert("Usted se encuentra deshabilitado");
       }

      } 
      else{
        this.user1="";
        this.pass1="";
        this.risposta="Sorry, error user or password!";
      }
  });

  console.log(this.loginForm.controls.username.value);
  console.log(this.loginForm.controls.password.value);

}
//--------------------------------




//---------------------------------

login_user(event){
event.preventDefault()
const target = event.target
const username = target.querySelector('#username')
const pass = target.querySelector('#pasword')

console.log(username,pass)
}

}
