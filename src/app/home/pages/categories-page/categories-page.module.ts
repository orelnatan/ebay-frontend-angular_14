import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
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
            { path: '', component: CategoriesPageComponent },
        ])
    ],
    providers: [
        CategoriesService
    ]
})
export class CategoriesPageModule {}