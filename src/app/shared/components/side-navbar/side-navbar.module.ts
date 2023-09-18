import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '@ebay/shared/directives';

import { SideNavbarComponent } from './side-navbar.component';

@NgModule({
    declarations: [ 
        SideNavbarComponent,
    ],
    imports: [
        CommonModule,
        DirectivesModule
    ],
    exports: [
        SideNavbarComponent
    ]
})
export class SideNavbarModule {}