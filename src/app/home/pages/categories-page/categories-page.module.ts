import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/layout/layout.module';
import { SharedModule } from '@ebay/shared/shared.module';
import { CategoriesService } from '@ebay/home/services';
import { CategoryCardComponent, EntityCardComponent } from '@ebay/home/components';

import { CategoriesPageComponent } from './categories-page.component';

@NgModule({
    declarations: [
        CategoriesPageComponent,
        CategoryCardComponent
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        SharedModule,
        EntityCardComponent,
        RouterModule.forChild([
            { path: '', component: CategoriesPageComponent },
        ])
    ],
    providers: [
        CategoriesService
    ]
})
export class CategoriesPageModule {}