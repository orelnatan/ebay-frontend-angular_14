import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IValidation } from '@ebay/shared/eb-forms/models';
import { ILogin } from '@ebay/auth/models';

import * as Validations from './validations.json';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    validations: Record<string, IValidation> = Validations;
 
    @Input() login: ILogin = {} as ILogin;
    @Input() loading: boolean;

    @Output() onsubmit: EventEmitter<ILogin> = new EventEmitter();
}
