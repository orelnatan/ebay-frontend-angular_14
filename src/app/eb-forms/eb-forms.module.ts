import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    InputText,
    InputPassword,
    PrimaryButton
} from './components';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        InputText,
        InputPassword,
        PrimaryButton
    ],
    exports: [
        InputText,
        InputPassword,
        PrimaryButton
    ]
})
export class EbFormsModule {}