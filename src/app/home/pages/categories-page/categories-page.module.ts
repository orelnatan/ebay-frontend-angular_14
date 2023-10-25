import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { CategoryCardModule, PageLoaderModule } from '@ebay/home/components';

import { CategoriesPageComponent } from './categories-page.component';

const CATEGORIES_ICON: string = "../../../../assets/images/svg/category_white.svg";

@NgModule({
    declarations: [
        CategoriesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        CategoryCardModule,
        DirectivesModule,
        ElementsGridModule,
        PageLoaderModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            { 
                path: 'categories',
                component: CategoriesPageComponent,
                data: {
                    redirect: {
                        route: "home/brands",
                    },
                    crumbs: [
                        {
                            path: "categories",
                            name: "Categories",
                            image: CATEGORIES_ICON
                        }
                    ]
                }
            },
        ])
    ]
})
export class CategoriesPageModule {}