import { Component, OnInit } from '@angular/core';
import { LoginAuth } from '../login-auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginAuth: LoginAuth = {
    email: null,
    password: null
  };

  onSubmit(): void {
    console.log(this.loginAuth);
  }

  constructor() { }

  ngOnInit() {
    console.log("GUIGUI: " + LoginAuth);
  }

}
