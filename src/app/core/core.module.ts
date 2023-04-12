import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { LayoutModule } from '@ebay/shared/layout';
import { SideNavbarModule } from '@ebay/shared/components';
import { BreadcrumbsModule } from '@ebay/shared/breadcrumbs';

import { EbayLocalStorageService, NavigationTreeService } from './services';
import { DirectivesModule } from './directives';
import { AppNavbarModule } from './components';
import { CoreRoutingModule } from './core-routing.module';
import { CoreRootComponent } from './core-root.component';

@NgModule({
    declarations: [
        CoreRootComponent,
    ],
    imports: [ 
        HttpClientModule,
        CoreRoutingModule,
        MatDialogModule,
        AppNavbarModule,
        LayoutModule,
        SideNavbarModule,
        DirectivesModule,
        BreadcrumbsModule
    ],
    providers: [
        EbayLocalStorageService,
        NavigationTreeService
    ]
})
export class CoreModule {}