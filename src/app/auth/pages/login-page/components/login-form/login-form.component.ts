import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ILogin } from '@ebay/auth/models';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent { 
  @Input() login: ILogin = {} as ILogin;
  @Input() loading: boolean;

  @Output() onsubmit: EventEmitter<ILogin> = new EventEmitter();
}
