import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { 
    PageLayoutComponent, 
    RootLayoutComponent,
    PrimaryNavbarComponent,
    SecondaryNavbarComponent,
    SubNavbarComponent,
    SideNavbarComponent,
} from './components';

@NgModule({
    declarations: [
        PrimaryNavbarComponent,
        SecondaryNavbarComponent,
        SubNavbarComponent,
        SideNavbarComponent,
        RootLayoutComponent,
        PageLayoutComponent,
    ],
    imports: [ 
        CommonModule,
        RouterLink,
        MatIconModule,
    ],
    exports: [
        RootLayoutComponent,
        PageLayoutComponent,
        PrimaryNavbarComponent,
        SecondaryNavbarComponent,
        SubNavbarComponent,
        SideNavbarComponent,
    ]
})
export class LayoutModule {}