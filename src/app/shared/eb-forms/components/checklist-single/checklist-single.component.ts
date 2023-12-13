import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';
import { IListItem } from '../../models';

@Component({
  selector: 'checklist-single',
  templateUrl: './checklist-single.component.html',
  styleUrls: ['./checklist-single.component.scss']
})
export class ChecklistSingleComponent<T> extends BaseInputComponent {
  @Input() value: T;
  @Input() items: IListItem[] = [];
  
  @Output() onchange: EventEmitter<T> = new EventEmitter();
}