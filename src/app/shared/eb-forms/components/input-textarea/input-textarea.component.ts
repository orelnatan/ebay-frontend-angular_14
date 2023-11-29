import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'input-textarea',
  templateUrl: './input-textarea.component.html',
})
export class InputTextareaComponent extends BaseInputComponent {
  @Input() value: string;
  @Input() rows: number;
  @Input() cols: number;
  @Input() maxlength: number;
  
  @Output() onchange: EventEmitter<string> = new EventEmitter();
}