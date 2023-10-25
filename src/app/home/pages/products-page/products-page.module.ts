import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { PageLoaderModule, ProductCardModule } from '@ebay/home/components';

import { ProductsPageComponent } from './products-page.component';

const PRODUCTS_ICON: string = "../../../../assets/images/svg/shopping_cart_white.svg";

@NgModule({
    declarations: [
        ProductsPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        ProductCardModule,
        PageLoaderModule,
        DirectivesModule,
        ElementsGridModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { 
                path: 'products',
                component: ProductsPageComponent,
                data: {
                    redirect: {
                        route: "home/brands/brandId/categories/categoryId/families",
                    },
                    crumbs: [
                        {
                            path: "products",
                            name: "Products",
                            image: PRODUCTS_ICON
                        } 
                    ]
                }
            },
        ])
    ]
})
export class ProductsPageModule {}