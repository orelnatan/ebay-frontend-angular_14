import { Component, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent extends BaseInputComponent implements AfterContentChecked {
  @Input() value: boolean;

  @Output() onchange: EventEmitter<boolean> = new EventEmitter();

  ngAfterContentChecked(): void {
    this.control?.setValue(this.value ? this.value : null);
  }
}