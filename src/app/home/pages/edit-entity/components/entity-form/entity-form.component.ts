import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { IEntity } from '@ebay/home/models';

@Component({
  selector: 'entity-form',
  templateUrl: './entity-form.component.html',
})
export class EntityFormComponent {
  @ViewChild(MatButton, { static: true }) submitter: MatButton;

  @Input() entity: IEntity = {} as IEntity;

  @Output() onsubmit: EventEmitter<IEntity> = new EventEmitter();

  submit(): void {
    this.submitter._elementRef.nativeElement.click();
  }
}
