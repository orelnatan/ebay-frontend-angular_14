import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class ModalComponent {
    @Input() title: string;
    @Input() subTitle: string;
    @Input() underSubTitle: string;
    @Input() titleColor: string;

    @Input() excludeActions: boolean;
}
