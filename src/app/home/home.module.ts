import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { HomeRoutingModule } from './home.routing.module';

import { 
    HomeRootComponent
} from './components';

@NgModule({
    declarations: [
        HomeRootComponent,
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomeRoutingModule,
        SharedModule,
        LayoutModule
    ],
})
export class HomeModule {}