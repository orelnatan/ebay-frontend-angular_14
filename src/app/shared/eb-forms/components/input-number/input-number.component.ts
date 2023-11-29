import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
})
export class InputNumberComponent extends BaseInputComponent {
  @Input() value: number;
  
  @Output() onchange: EventEmitter<number> = new EventEmitter();
}