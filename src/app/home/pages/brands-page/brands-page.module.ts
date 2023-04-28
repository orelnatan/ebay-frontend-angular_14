import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { BrandCardModule } from '@ebay/home/components';

import { BrandsPageComponent } from './brands-page.component';

@NgModule({
    declarations: [
        BrandsPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        BrandCardModule,
        DirectivesModule,
        ElementsGridModule,
        RouterModule.forChild([
            { path: '', component: BrandsPageComponent },
        ])
    ]
})
export class BrandsPageModule {}