import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { CategoryCardModule } from '@ebay/home/components';
import { ICrumb } from '@ebay/shared/breadcrumbs/models';

import { CategoriesPageComponent } from './categories-page.component';

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
        RouterModule.forChild([
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            { 
                path: 'categories',
                component: CategoriesPageComponent,
                data: {
                    crumbs: [
                        {
                            path: "categories",
                            name: "Categories"
                        }
                    ] as Array<ICrumb>
                }
            },
        ])
    ]
})
export class CategoriesPageModule {}