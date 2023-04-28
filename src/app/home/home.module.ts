import { NgModule } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { CrumbsbarModule, SideNavbarModule, UtilsPanelModule } from '@ebay/shared/components';

import { BrandsService, CategoriesService, FamiliesService } from './services';
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
        TitleCasePipe,
        BrandsService,
        CategoriesService,
        FamiliesService
    ]
})
export class HomeModule {}