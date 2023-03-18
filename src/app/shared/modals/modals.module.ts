import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ComponentsModule } from '../components';

import { LoaderModalComponent } from './loader-modal';
import { AlertModalComponent } from './alert-modal';

@NgModule({
    declarations: [
        LoaderModalComponent,
        AlertModalComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        ComponentsModule,
    ],
    exports: [
        LoaderModalComponent,
        AlertModalComponent
    ]
})
export class ModalsModule {}