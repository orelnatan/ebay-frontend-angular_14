import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { FamiliesService } from '@ebay/home/services';
import { FamilyCardModule } from '@ebay/home/components';

import { FamiliesPageComponent } from './families-page.component';

@NgModule({
    declarations: [
        FamiliesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        FamilyCardModule,
        DirectivesModule,
        ElementsGridModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'families', pathMatch: 'full' },
            { 
                path: 'families',
                component: FamiliesPageComponent,
                children: [
                    {
                        path: ':familyId',
                        loadChildren: () => import('../../pages/products-page').then(products => products.ProductsPageModule),
                        data: { 
                            node: { skip: true }
                        },
                    }
                ],
            },
        ])
    ],
    providers: [
        FamiliesService
    ]
})
export class FamiliesPageModule {}