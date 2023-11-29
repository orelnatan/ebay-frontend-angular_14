import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'checklist-multi',
  templateUrl: './checklist-multi.component.html',
  styleUrls: ['./checklist-multi.component.scss']
})
export class ChecklistMultiComponent extends BaseInputComponent {
  // @Input() list: IListItem[];
  // @Input() value: number[];
  
  // @Output() onchange: EventEmitter<IListItem[]> = new EventEmitter();

  // handleChange(item: IListItem, value: boolean): void {
   
  // }
}