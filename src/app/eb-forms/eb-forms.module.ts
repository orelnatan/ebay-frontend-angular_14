import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
        MatButtonModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatInputModule,
        MatIconModule,
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