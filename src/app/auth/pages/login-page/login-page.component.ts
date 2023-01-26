import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthenticationService } from '../../services';
import { ILogin, IUser } from '../../models';

import { MatSnackbarTypes } from '../../../../assets/consts';
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

  inProgress: boolean;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly matSnackBarService: MatSnackBar
  ) {}

  loginSuccess(user: IUser) {
    this.inProgress = false;

    console.log(user);
  }

  handleSubmit(login: ILogin): void {
    this.inProgress = true;

    this.authenticationService.login(login).subscribe({
      next: (response: IUser | HttpErrorResponse) => {
        this.loginSuccess(response as IUser);
      },
      error: (error: HttpErrorResponse) => {
        this.inProgress = false;
        
        this.matSnackBarService.open(error.error.message, 'X', MatSnackbarTypes.error);
      },
    })
  }
}
