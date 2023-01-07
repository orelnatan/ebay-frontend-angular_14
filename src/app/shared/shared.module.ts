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

import { 
    PaddingDirective
} from './directives';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PaddingDirective,
        AppPrimaryNavbarComponent,
        AppSecondaryNavbarComponent,
        AppSubNavbarComponent,
        AppSideNavbarComponent
    ],
    exports: [
        AppPrimaryNavbarComponent,
        AppSecondaryNavbarComponent,
        AppSubNavbarComponent,
        AppSideNavbarComponent,
        PaddingDirective
    ]
})
export class SharedModule {}