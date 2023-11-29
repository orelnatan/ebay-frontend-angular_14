import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IRegistration, UserType } from '@ebay/auth/models';
import { IRadioItem } from '@ebay/shared/eb-forms';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent {
  @Input() registration: IRegistration = {} as IRegistration;
  @Input() loading: boolean;

  @Output() onsubmit: EventEmitter<IRegistration> = new EventEmitter();

  userTypes: IRadioItem[] = [
    {
      id: 1,
      value: UserType.Admin,
      placeholder: UserType.Admin,
    },
    {
      id: 2,
      value: UserType.Editor,
      placeholder: UserType.Editor,
    },
    {
      id: 3,
      value: UserType.Regular,
      placeholder: UserType.Regular,
    },
  ];  
}
