import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';

import { 
    PasswordValidator
} from './validators';

import { 
    DisabledStateDirective,
    ErrorStateDirective
} from './directives';

import { 
    AbstractToFormControlPipe,
    ControlValidityPipe,
    ValidationPipe
} from './pipes';

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
        ControlValidityPipe,
        PasswordValidator,
        ErrorStateDirective,
        DisabledStateDirective
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
        InputCheckboxComponent,
        PasswordValidator,
    ]
})
export class EbFormsModule {}