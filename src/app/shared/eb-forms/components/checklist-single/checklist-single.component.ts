import { AfterContentChecked, Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';
import { IListItem } from '../../models';

@Component({
  selector: 'checklist-single',
  templateUrl: './checklist-single.component.html',
  styleUrls: ['./checklist-single.component.scss']
})
export class ChecklistSingleComponent<T> extends BaseInputComponent implements AfterContentChecked {
  @Input() value: T;
  @Input() items: IListItem[] = [];
  
  @Output() onchange: EventEmitter<T> = new EventEmitter();

  ngAfterContentChecked(): void {
    this.control?.setValue(this.value ? this.value : null);
  }
}