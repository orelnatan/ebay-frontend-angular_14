import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { BreadcrumbPathResolver } from '@ebay/shared/breadcrumbs';
import { ProductsService } from '@ebay/home/services';
import { ProductCardModule } from '@ebay/home/components';

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
                runGuardsAndResolvers: "always",
                resolve: {
                    path: BreadcrumbPathResolver
                }
            },
        ])
    ],
    providers: [
        ProductsService
    ]
})
export class ProductsPageModule {}