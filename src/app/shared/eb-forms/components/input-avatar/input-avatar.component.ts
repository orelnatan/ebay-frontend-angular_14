import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BaseInputComponent } from '../base-input';

@Component({
  selector: 'input-avatar',
  templateUrl: './input-avatar.component.html',
  styleUrls: ['./input-avatar.component.scss']
})
export class InputAvatarComponent extends BaseInputComponent {  
  @Input() value: File;
  
  @Output() onchange: EventEmitter<File> = new EventEmitter();
}