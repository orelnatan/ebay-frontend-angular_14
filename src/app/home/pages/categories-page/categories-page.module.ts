import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { CategoriesService } from '@ebay/home/services';
import { CategoryCardModule } from '@ebay/home/components';

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
                children: [
                    { 
                        path: ':categoryId',
                        loadChildren: () => import('../../pages/families-page').then(families => families.FamiliesPageModule),
                        data: { 
                            node: { skip: true }
                        },
                    }
                ]
            },
        ])
    ],
    providers: [
        CategoriesService
    ]
})
export class CategoriesPageModule {}