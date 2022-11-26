import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    AppPrimaryNavbarComponent,
    AppSecondaryNavbarComponent,
    AppSubNavbarComponent,
    AppSideNavbarComponent,
} from './components';

@NgModule({
    declarations: [
        AppPrimaryNavbarComponent,
        AppSecondaryNavbarComponent,
        AppSubNavbarComponent,
        AppSideNavbarComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    exports: [
        AppPrimaryNavbarComponent,
        AppSecondaryNavbarComponent,
        AppSubNavbarComponent,
        AppSideNavbarComponent
    ]
})
export class SharedModule {}