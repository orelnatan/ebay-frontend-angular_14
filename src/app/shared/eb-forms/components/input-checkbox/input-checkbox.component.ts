import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent extends BaseInputComponent implements OnChanges {
  @Input() value: boolean;

  @Output() onchange: EventEmitter<boolean> = new EventEmitter();

  ngOnChanges(): void {
    setTimeout(() => {
      this.control?.setValue(
        this.value ? this.value : null);
    }, 0);
  }
}