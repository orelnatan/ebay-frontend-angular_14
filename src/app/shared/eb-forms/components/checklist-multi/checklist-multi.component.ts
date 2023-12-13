import { AfterContentChecked, Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';
import { IListItem } from '../../models';

@Component({
  selector: 'checklist-multi',
  templateUrl: './checklist-multi.component.html',
  styleUrls: ['./checklist-multi.component.scss']
})
export class ChecklistMultiComponent<T> extends BaseInputComponent implements AfterContentChecked {
  @Input() value: T[] = [];
  @Input() items: IListItem[] = [];
  
  @Output() onchange: EventEmitter<T[]> = new EventEmitter();

  ngAfterContentChecked(): void {
    this.control?.setValue(this.value ? this.value : null);
  }

  toggle(boxValue: string): void {
    if(!this.value) this.value = [];

    this.isExist(boxValue) ? this.remove(boxValue) : this.add(boxValue);
  }

  add(boxValue: string): void {    
    this.onchange.emit([...this.value, ...[(boxValue as unknown as T)]]);
  }

  remove(boxValue: string): void {
    this.onchange.emit(this.value.filter(item => item != (boxValue as unknown as T)));
  }

  isExist(boxValue: string): boolean {
    return this.value?.includes((boxValue as unknown as T));
  }
}