import { Component, OnInit, Input, Injectable, OnDestroy, Output } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

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
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
    
   }

  ngOnInit() {
    this.disabilitato=true;
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
  });
  }
  ngOnDestroy(){

  }
  logIn() {
    
    this.router.navigate(['/area-riservata']);
  
  
  console.log(this.loginForm.controls.username.value);
  console.log(this.loginForm.controls.password.value);
}

login_user(event){
event.preventDefault()
const target = event.target
const username = target.querySelector('#username')
const pass = target.querySelector('#pasword')

console.log(username,pass)
}

}
