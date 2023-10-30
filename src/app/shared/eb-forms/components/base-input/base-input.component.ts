import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { BaseErrorStateMatcher } from '../../classes';
import { IValidation } from '../../models';

@Component({
  selector: 'base-input',
  template: ``,
})
export class BaseInputComponent {
  @Input() control: FormControl;
  @Input() validation: IValidation;
  @Input() placeholder: string;
  @Input() hint: string;
  @Input() readonly: boolean;

  matcher: ErrorStateMatcher = new BaseErrorStateMatcher();
}