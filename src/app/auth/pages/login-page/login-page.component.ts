import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../../services';
import { ILogin, IUser } from '../../models';

import * as Validations from './validations.json';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  validations = Validations;

  login: ILogin = {
    "username": "Graves Oneal",
    "email": "gravesoneal@quordate.com",
    "password": "78freweb5d4654"
  } as ILogin;

  login$: Observable<IUser | HttpErrorResponse>;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly matSnackbarService: MatSnackBar
  ) {}

  handleSubmit(login: ILogin): void {
    this.login$ = this.authenticationService.login(login);
  }

  loginSuccess(user: IUser): void {
    console.log(user);
  }

  loginFailed(error: HttpErrorResponse): void {
    this.matSnackbarService.open(error.error.message, 'X', {
        panelClass: ["alert-error-state"]
    });
  }
}
