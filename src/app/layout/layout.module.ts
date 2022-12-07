import { NgModule } from '@angular/core';

import { 
    PageLayoutComponent, 
    RootLayoutComponent
} from './components';

@NgModule({
    imports: [ 
        RootLayoutComponent,
        PageLayoutComponent,
    ],
    exports: [
        RootLayoutComponent,
        PageLayoutComponent,
    ]
})
export class LayoutModule {}