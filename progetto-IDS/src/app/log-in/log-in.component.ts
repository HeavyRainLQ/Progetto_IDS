import { Component, OnInit, Input, Injectable, OnDestroy, Output } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LogInComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  @Input() username: string;
  @Input() password: string;
  disabilitato: boolean;
  
  constructor(private formBuilder: FormBuilder) {
    
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
    
    this.disabilitato= false;
  
  
  console.log(this.loginForm.controls.username.value);
  console.log(this.loginForm.controls.password.value);
}

}
