import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

import { AuthRootComponent } from './auth-root.component';

@NgModule({
    declarations: [
        AuthRootComponent,
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthRoutingModule,
        SharedModule,
        LayoutModule
    ],
})
export class AuthModule {}