import { NgModule } from '@angular/core';

import { UtilsPanelComponent } from './utils-panel.component';

@NgModule({
    declarations: [ 
        UtilsPanelComponent,
    ],
    exports: [
        UtilsPanelComponent
    ]
})
export class UtilsPanelModule {}