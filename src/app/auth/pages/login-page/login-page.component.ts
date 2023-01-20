import { Component } from '@angular/core';

import { ILogin } from '../../interfaces';

import * as validations from './validations.json';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  login: ILogin = {password: "dsad" } as ILogin;

  validations = validations;


  
  handleSubmit(login: any): void {
    console.log(login)
  }


  print(e: any) {
    console.log(validations)
  }
  
}
