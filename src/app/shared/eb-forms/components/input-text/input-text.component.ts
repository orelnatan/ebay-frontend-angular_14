import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent extends BaseInputComponent {
  @Input() value: string;
  
  @Output() onchange: EventEmitter<string> = new EventEmitter();
}