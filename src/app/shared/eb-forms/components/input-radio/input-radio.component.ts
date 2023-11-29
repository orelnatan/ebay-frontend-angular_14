import { Component, Input, Output, EventEmitter } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
})
export class InputRadioComponent<T> extends BaseInputComponent {
  @Input() value: string;
  @Input() checked: boolean;

  @Output() onchange: EventEmitter<T> = new EventEmitter();
}