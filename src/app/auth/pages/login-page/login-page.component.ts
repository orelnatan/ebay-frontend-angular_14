import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { EbayLocalStorageService } from '@ebay/core/services';
import { StorageKeys } from '@ebay/core/models';
import { AuthenticationService } from '@ebay/auth/services';
import { ILogin, IUser } from '@ebay/auth/models';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  login: ILogin = {
    "username": "Graves Oneal",
    "email": "gravesoneal@quordate.com",
    "password": "78freweb5d4654"
  } as ILogin;
  
  login$: Observable<IUser>;

  constructor(
    private readonly matSnackbar: MatSnackBar,
    private readonly authenticationService: AuthenticationService,
    private readonly ebayLocalStorageService: EbayLocalStorageService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  handleSubmit(login: ILogin): void {
    this.login$ = this.authenticationService.login(login);
  }

  loginSuccess(user: IUser): void {
    this.ebayLocalStorageService.store(StorageKeys.User, user);
    
    this.router.navigate([this.activatedRoute.snapshot.queryParams['returnUrl'] || "/home"]);
  }

  loginFailed(error: HttpErrorResponse): void {
    this.matSnackbar.open(error.error.message, 'X', {
        panelClass: ["snak-error-state"]
    });
  }
}
