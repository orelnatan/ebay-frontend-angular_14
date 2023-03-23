import { NgModule } from '@angular/core';

import { ElementsGridComponent } from './elements-grid.component';

@NgModule({
    declarations: [ 
        ElementsGridComponent,
    ],
    exports: [
        ElementsGridComponent
    ]
})
export class ElementsGridModule {}