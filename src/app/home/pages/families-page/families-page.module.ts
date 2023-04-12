import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { BreadcrumbPathResolver } from '@ebay/shared/breadcrumbs';
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
                runGuardsAndResolvers: "always",
                resolve: {
                    path: BreadcrumbPathResolver
                },
                children: [
                    {
                        path: ':familyId',
                        loadChildren: () => import('../../pages/products-page').then(products => products.ProductsPageModule),
                        runGuardsAndResolvers: "always",
                        data: { 
                            node: { skip: true }
                        },
                        resolve: {
                            path: BreadcrumbPathResolver,
                        }
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