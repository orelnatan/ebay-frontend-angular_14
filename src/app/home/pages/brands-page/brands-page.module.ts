import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ComponentsModule } from '@ebay/shared/components';
import { CardsModule } from '@ebay/shared/cards';
import { BrandsService } from '@ebay/home/services';

import { BrandsPageComponent } from './brands-page.component';

@NgModule({
    declarations: [
        BrandsPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        DirectivesModule,
        ComponentsModule,
        CardsModule,
        RouterModule.forChild([
            { path: '', component: BrandsPageComponent },
        ])
    ],
    providers: [
        BrandsService
    ]
})
export class BrandsPageModule {}