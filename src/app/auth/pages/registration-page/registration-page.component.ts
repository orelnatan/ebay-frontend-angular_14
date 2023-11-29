import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@ebay/auth/services';
import { IRegistration } from '@ebay/auth/models';

const REGISTRATION_SUCCESS_MESSAGE: string = "Account successfully created, you are now been logged in";

@Component({
  selector: 'registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  registration: IRegistration = {} as IRegistration;
  
  register$: Observable<IRegistration>;

  constructor(
    private readonly router: Router,
    private readonly authenticationService: AuthenticationService,
    private readonly matSnackbar: MatSnackBar,
  ) {}

  handleSubmit(registration: IRegistration): void {
    this.register$ = this.authenticationService.register(registration);
  }

  registrationSuccess(registration: IRegistration): void {
    this.matSnackbar.open(REGISTRATION_SUCCESS_MESSAGE, 'X', {
      panelClass: ["snak-success-state"]
    });

    this.navigateToLoginPage(registration);
  }

  registrationFailed(error: HttpErrorResponse): void {
    this.matSnackbar.open(error.error.message, 'X', {
      panelClass: ["snak-error-state"]
    });
  }

  navigateToLoginPage(registration: IRegistration): void {
    this.router.navigate(["/auth/login"], {
      queryParams: {
        autoLogin: true,
        username: registration.name,
        email: registration.email,
        password: registration.password,
      }
    });
  }
}

