import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { AuthGuard } from '@ebay/shared/guards';
import { CardsModule } from '@ebay/shared/cards';
import { CategoriesService } from '@ebay/home/services';

import { CategoriesPageComponent } from './categories-page.component';

@NgModule({
    declarations: [
        CategoriesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        DirectivesModule,
        ElementsGridModule,
        CardsModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            { 
                path: 'categories',
                component: CategoriesPageComponent,
                children: [
                    { 
                        path: ':category',
                        loadChildren: () => import('../../pages/families-page').then(families => families.FamiliesPageModule),
                        canActivateChild: [AuthGuard],
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