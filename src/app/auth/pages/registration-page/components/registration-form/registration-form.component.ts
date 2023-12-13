import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Domain, IRegistration, UserType } from '@ebay/auth/models';
import { IListItem } from '@ebay/shared/eb-forms';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent {
  @Input() registration: IRegistration = {} as IRegistration;
  @Input() loading: boolean;

  @Output() onsubmit: EventEmitter<IRegistration> = new EventEmitter();

  userTypes: IListItem[] = [
    {
      value: UserType.Admin,
      placeholder: UserType.Admin,
    },
    {
      value: UserType.Editor,
      placeholder: UserType.Editor,
    },
    {
      value: UserType.Regular,
      placeholder: UserType.Regular,
    },
  ];  

  domainTypes: IListItem[] = [
    {
      value: Domain.Software,
      placeholder: Domain.Software,
    },
    {
      value: Domain.Hardware,
      placeholder: Domain.Hardware
    },
    {
      value: Domain.Artillery,
      placeholder: Domain.Artillery
    },
    {
      value: Domain.Chemistry,
      placeholder: Domain.Chemistry
    },
    {
      value: Domain.Electronics,
      placeholder: Domain.Electronics
    },
    {
      value: Domain.Mathematics,
      placeholder: Domain.Mathematics
    },
    {
      value: Domain.Nuclear,
      placeholder: Domain.Nuclear
    },
    {
      value: Domain.Optics,
      placeholder: Domain.Optics
    },
    {
      value: Domain.Physics,
      placeholder: Domain.Physics
    },
  ];  
}
