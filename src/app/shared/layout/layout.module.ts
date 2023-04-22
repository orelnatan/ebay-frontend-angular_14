import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DynamicModule } from 'ng-dynamic-component';

import { 
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutFooterComponent,
    PageParentComponent,
} from './components';

@NgModule({
    declarations: [
        RootLayoutComponent,
        PageParentComponent,
        PageLayoutComponent, 
        LayoutHeaderComponent,
        LayoutSidebarComponent,
        LayoutFooterComponent,
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        DynamicModule
    ],
    exports: [
        RootLayoutComponent,
        PageParentComponent,
        PageLayoutComponent, 
        LayoutHeaderComponent,
        LayoutSidebarComponent,
        LayoutFooterComponent
    ]
})
export class LayoutModule {}