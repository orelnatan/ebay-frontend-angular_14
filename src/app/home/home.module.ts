import { NgModule } from '@angular/core';

import { LayoutModule } from '@ebay/shared/layout';
import { AuthGuard } from '@ebay/shared/guards';
import { SideNavbarModule, UtilsPanelModule } from '@ebay/shared/components';
import { BreadcrumbsModule } from '@ebay/shared/breadcrumbs';

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
        BreadcrumbsModule
    ],
    providers: [
        AuthGuard,
    ]
})
export class HomeModule {}