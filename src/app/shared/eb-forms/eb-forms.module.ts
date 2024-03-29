import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ImgBBService } from './services';

import { 
  PasswordValidator,
  CollectionValidator,
  RequireMatchValidator,
} from './validators';

import { 
  DisabledStateDirective,
  ErrorStateDirective
} from './directives';

import { 
  AbstractToFormControlPipe,
  ControlValidityPipe,
  ValidationPipe,
  FileTo64BitPipe,
} from './pipes';

import { 
  InputTextComponent,
  InputTextareaComponent,
  InputNumberComponent,
  InputPasswordComponent,
  PrimaryButtonComponent,
  InputImageComponent,
  InputRadioComponent,
  InputCheckboxComponent,
  ChecklistMultiComponent,
  ChecklistSingleComponent,
  InputsContainerComponent,
  InputFieldComponent,
} from './components';

import { SpinnerModule } from '../components';
import { UtilsModule } from '../utils';

@NgModule({
  declarations: [
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InputPasswordComponent,
    PrimaryButtonComponent,
    InputImageComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    ChecklistMultiComponent,
    ChecklistSingleComponent,
    InputsContainerComponent,
    InputFieldComponent,
    AbstractToFormControlPipe,
    ValidationPipe,
    FileTo64BitPipe,
    ControlValidityPipe,
    ErrorStateDirective,
    DisabledStateDirective,
    PasswordValidator,
    CollectionValidator,
    RequireMatchValidator
  ],
  imports: [ 
    CommonModule,
    UtilsModule,
    SpinnerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InputPasswordComponent,
    PrimaryButtonComponent,
    InputImageComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    ChecklistMultiComponent,
    ChecklistSingleComponent,
    InputsContainerComponent,
    InputFieldComponent,
    PasswordValidator,
    CollectionValidator,
    RequireMatchValidator
  ],
  providers: [
    ImgBBService
  ]
})
export class EbFormsModule {}