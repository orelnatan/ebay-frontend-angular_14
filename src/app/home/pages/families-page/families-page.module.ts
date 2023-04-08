import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { BreadcrumbPathResolver } from '@ebay/shared/breadcrumbs';
import { CardsModule } from '@ebay/shared/cards';
import { FamiliesService } from '@ebay/home/services';

import { FamiliesPageComponent } from './families-page.component';

@NgModule({
    declarations: [
        FamiliesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        DirectivesModule,
        ElementsGridModule,
        CardsModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'families', pathMatch: 'full' },
            { 
                path: 'families',
                component: FamiliesPageComponent,
                runGuardsAndResolvers: "always",
                resolve: {
                    path: BreadcrumbPathResolver
                },
                children: [],
            },
        ])
    ],
    providers: [
        FamiliesService
    ]
})
export class FamiliesPageModule {}