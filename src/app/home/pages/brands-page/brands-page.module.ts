import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from 'src/app/layout/layout.module';

import { BrandsPageComponent } from './brands-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BrandsPageComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        LayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild([
            { path: '', component: BrandsPageComponent },
        ])
    ],
})
export class BrandsPageModule {}