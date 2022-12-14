import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EbFormsModule } from 'src/app/eb-forms/eb-forms.module';
import { LayoutModule } from 'src/app/layout/layout.module';

import { LoginPageComponent } from './login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        LayoutModule,
        SharedModule,
        ReactiveFormsModule,
        HttpClientModule,
        EbFormsModule,
        RouterModule.forChild([
            { path: '', component: LoginPageComponent },
        ])
    ],
})
export class LoginPageModule {}