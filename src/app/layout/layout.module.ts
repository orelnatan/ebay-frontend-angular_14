import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    PageLayoutComponent, 
    RootLayoutComponent
} from './components';

@NgModule({
    declarations: [
        RootLayoutComponent,
        PageLayoutComponent,
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [
        RootLayoutComponent,
        PageLayoutComponent,
    ]
})
export class LayoutModule {}