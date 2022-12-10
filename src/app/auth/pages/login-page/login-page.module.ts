import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from 'src/app/layout/layout.module';

import { LoginPageComponent } from './login-page.component';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        LayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild([
            { path: '', component: LoginPageComponent },
        ])
    ],
})
export class LoginPageModule {}