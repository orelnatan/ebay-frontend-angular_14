import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '@ebay/shared/pipes';

import { RouterBreadcrumbsComponent } from './router-breadcrumbs.component';

@NgModule({
    declarations: [ 
        RouterBreadcrumbsComponent,
    ],
    imports: [
        CommonModule,
        PipesModule
    ],
    exports: [
        RouterBreadcrumbsComponent
    ]
})
export class RouterBreadcrumbsModule {}