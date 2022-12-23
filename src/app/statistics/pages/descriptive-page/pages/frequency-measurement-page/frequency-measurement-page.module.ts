import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from 'src/app/layout/layout.module';

import { FrequencyMeasurementPageComponent } from './frequency-measurement-page.component';

@NgModule({
    declarations: [
        FrequencyMeasurementPageComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        LayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild([
            { path: '', component: FrequencyMeasurementPageComponent },
        ])
    ],
})
export class  FrequencyMeasurementPageModule {}