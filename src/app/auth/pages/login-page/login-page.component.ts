import { Component } from '@angular/core';
import { ILogin } from '../../interfaces';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  login: ILogin = {} as ILogin;


  handleSubmit(login: ILogin): void {
    console.log(login)
  }
  
}
