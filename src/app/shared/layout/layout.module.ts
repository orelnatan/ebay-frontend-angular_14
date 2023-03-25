import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { 
    RootLayoutComponent,
    PageLayoutComponent, 
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LayoutFooterComponent,
} from './components';

@NgModule({
    declarations: [
        RootLayoutComponent,
        PageLayoutComponent, 
        LayoutHeaderComponent,
        LayoutSidebarComponent,
        LayoutFooterComponent
    ],
    imports: [ 
        CommonModule,
        RouterLink,
        MatIconModule,
    ],
    exports: [
        RootLayoutComponent,
        PageLayoutComponent, 
        LayoutHeaderComponent,
        LayoutSidebarComponent,
        LayoutFooterComponent
    ]
})
export class LayoutModule {}