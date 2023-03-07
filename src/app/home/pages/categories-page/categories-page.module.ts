import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@ebay/layout/layout.module';
import { SharedModule } from '@ebay/shared/shared.module';
import { CategoriesService } from '@ebay/home/services';

import { CategoriesPageComponent } from './categories-page.component';

@NgModule({
    declarations: [
        CategoriesPageComponent,
    ],
    imports: [ 
        CommonModule,
        LayoutModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: CategoriesPageComponent },
        ])
    ],
    providers: [
        CategoriesService
    ]
})
export class CategoriesPageModule {}