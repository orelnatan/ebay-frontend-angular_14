import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/shared/layout';
import { AuthGuard } from '@ebay/shared/guards';
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
    providers: [
        AuthGuard,
    ]
})
export class HomeModule {}