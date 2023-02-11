import { NgModule } from '@angular/core';

import { 
    PageLayoutComponent, 
    RootLayoutComponent,
    PrimaryNavbarComponent,
    SecondaryNavbarComponent,
    SubNavbarComponent,
    SideNavbarComponent,
} from './components';

@NgModule({
    imports: [ 
        RootLayoutComponent,
        PageLayoutComponent,
        PrimaryNavbarComponent,
        SecondaryNavbarComponent,
        SubNavbarComponent,
        SideNavbarComponent,
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