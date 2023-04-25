import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { ProductsService } from '@ebay/home/services';
import { ProductCardModule } from '@ebay/home/components';
import { ICrumb } from '@ebay/shared/breadcrumbs/models';

import { ProductsPageComponent } from './products-page.component';

@NgModule({
    declarations: [
        ProductsPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        ProductCardModule,
        DirectivesModule,
        ElementsGridModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { 
                path: 'products',
                component: ProductsPageComponent,
                data: {
                    crumbs: [
                        {
                            path: "products",
                            name: "Products"
                        } 
                    ] as Array<ICrumb>
                }
            },
        ])
    ],
    providers: [
        ProductsService
    ]
})
export class ProductsPageModule {}