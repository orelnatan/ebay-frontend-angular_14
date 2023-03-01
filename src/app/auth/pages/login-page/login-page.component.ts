import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { EbayLocalStorageService } from '@ebay/core/services';
import { AuthenticationService } from '@ebay/auth/services';
import { IValidation } from '@ebay/eb-forms/models';
import { ILogin, IUser } from '@ebay/auth/models';

import * as Validations from './validations.json';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  validations: Record<string, IValidation> = Validations;

  login: ILogin = {
    "username": "Graves Oneal",
    "email": "gravesoneal@quordate.com",
    "password": "78freweb5d4654"
  } as ILogin;
  
  login$: Observable<IUser>;

  constructor(
    private readonly matSnackbarService: MatSnackBar,
    private readonly authenticationService: AuthenticationService,
    private readonly ebayLocalStorageService: EbayLocalStorageService,
    private readonly routerService: Router
  ) {}

  handleSubmit(login: ILogin): void {
    this.login$ = this.authenticationService.login(login);
  }

  loginSuccess(user: IUser): void {
    this.ebayLocalStorageService.set("user", user);

    this.routerService.navigate(["/home"]);
  }

  loginFailed(error: HttpErrorResponse): void {
    this.matSnackbarService.open(error.error.message, 'X', {
        panelClass: ["snak-error-state"]
    });
  }
}
