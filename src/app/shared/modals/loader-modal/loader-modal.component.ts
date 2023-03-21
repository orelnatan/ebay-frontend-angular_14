import { Component } from '@angular/core';

import { ComponentsModule } from '@ebay/shared/components';

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
    ComponentsModule
  ]
})
export class LoaderModalComponent {}
