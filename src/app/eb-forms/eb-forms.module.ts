import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';

import { AbstractToFormControlPipe, InvalidPipe, ValidationPipe } from './pipes';

import { 
    InputTextComponent,
    InputPasswordComponent,
    PrimaryButtonComponent,
    InputCheckboxComponent
} from './components';

@NgModule({
    declarations: [
        InputTextComponent,
        InputPasswordComponent,
        PrimaryButtonComponent,
        InputCheckboxComponent,
        AbstractToFormControlPipe,
        ValidationPipe,
        InvalidPipe
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        AppMaterialModule
    ],
    exports: [
        InputTextComponent,
        InputPasswordComponent,
        PrimaryButtonComponent,
        InputCheckboxComponent
    ]
})
export class EbFormsModule {}