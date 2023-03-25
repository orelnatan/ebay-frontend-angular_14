import { Component } from '@angular/core';

@Component({
  selector: 'loader-modal',
  template: `
    <modal [excludeActions]="true">
        <ng-container content>
            <spinner></spinner>
        </ng-container>
    </modal>
  `,
})
export class LoaderModalComponent {}
