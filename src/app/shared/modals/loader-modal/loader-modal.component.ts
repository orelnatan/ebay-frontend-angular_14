import { Component } from '@angular/core';

import { ModalComponent, SpinnerComponent } from '@ebay/shared/components';

@Component({
  selector: 'loader-modal',
  template: `
    <modal [excludeActions]="true">
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
