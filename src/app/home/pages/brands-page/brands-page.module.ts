import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { BrandsService } from '@ebay/home/services';
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
            { 
                path: '',
                component: BrandsPageComponent,
                children: [
                    { 
                        path: ':brandId',
                        loadChildren: () => import('../../pages/categories-page').then(categories => categories.CategoriesPageModule),
                        data: { 
                            node: { skip: true },
                        },
                    },
                ]
            },
        ])
    ],
    providers: [
        BrandsService
    ]
})
export class BrandsPageModule {}