import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbPathResolver } from './resolvers';
import { NavigateByPathIndexDirective } from './directives';
import { BreadcrumbsComponent } from './components';

@NgModule({
    declarations: [ 
        BreadcrumbsComponent,
        NavigateByPathIndexDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BreadcrumbsComponent,
    ],
    providers: [
        BreadcrumbPathResolver,
    ]
})
export class BreadcrumbsModule {}