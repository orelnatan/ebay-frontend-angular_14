import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule } from '@ebay/shared/components';
import { CategoriesService } from '@ebay/home/services';
import { CategoryCardModule } from '@ebay/home/components';

import { CategoriesPageRoutingModule } from './categories-page-routing.module';
import { CategoriesPageComponent } from './categories-page.component';

@NgModule({
    declarations: [
        CategoriesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        CategoriesPageRoutingModule,
        CategoryCardModule,
        DirectivesModule,
        ElementsGridModule,
    ],
    providers: [
        CategoriesService
    ]
})
export class CategoriesPageModule {}