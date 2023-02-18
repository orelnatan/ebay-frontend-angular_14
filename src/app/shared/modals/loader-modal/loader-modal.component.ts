import { Component } from '@angular/core';
import { ModalComponent, SpinnerComponent } from '../../components';

@Component({
  selector: 'loader-modal',
  template: `
    <modal>
        <ng-container content>
            <spinner></spinner>
        </ng-container>
    </modal>
  `,
  standalone: true,
  imports: [
    ModalComponent,
    SpinnerComponent
  ]
})
export class LoaderModalComponent {}
