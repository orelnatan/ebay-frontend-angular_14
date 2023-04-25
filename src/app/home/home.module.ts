import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/shared/layout';
import { CrumbsbarModule, SideNavbarModule, UtilsPanelModule } from '@ebay/shared/components';

import { HomeRoutingModule } from './home-routing.module';
import { HomeRootComponent } from './home-root.component';

@NgModule({
    declarations: [
        HomeRootComponent,
    ],
    imports: [ 
        HomeRoutingModule,
        LayoutModule,
        SideNavbarModule,
        UtilsPanelModule,
        CrumbsbarModule
    ],
})
export class HomeModule {}