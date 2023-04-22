import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { FamiliesService } from '@ebay/home/services';
import { FamilyCardModule } from '@ebay/home/components';

import { FamiliesPageRoutingModule } from './families-page-routing.module';
import { FamiliesPageComponent } from './families-page.component';

@NgModule({
    declarations: [
        FamiliesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        FamiliesPageRoutingModule,
        FamilyCardModule,
        DirectivesModule,
        ElementsGridModule,
    ],
    providers: [
        FamiliesService
    ]
})
export class FamiliesPageModule {}