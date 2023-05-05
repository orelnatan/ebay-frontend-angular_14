import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { PipesModule } from '@ebay/shared/pipes';
import { ElementsGridModule } from '@ebay/shared/components';

import { ProductSpecPageComponent } from './product-spec-page.component';
import { ProductHeaderComponent, ProductSpecItemComponent } from './components';

@NgModule({
    declarations: [
        ProductSpecPageComponent,
        ProductHeaderComponent,
        ProductSpecItemComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        DirectivesModule,
        ElementsGridModule,
        PipesModule,
        RouterModule.forChild([
            { 
                path: '',
                component: ProductSpecPageComponent,
                data: {
                    redirect: {
                        route: "home/brands/brandId/categories/categoryId/families/familyId/products",
                    },
                }
            },
        ])
    ]
})
export class ProductSpecPageModule {}