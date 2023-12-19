import { Component, Input } from '@angular/core';

import { ModalType } from './modal-type.enum';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() underSubTitle: string;

  @Input() excludeActions: boolean;

  @Input() padding: number = 24;

  @Input() type: ModalType = ModalType.Blank;
}
