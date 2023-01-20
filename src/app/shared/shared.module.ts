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
    MarginDirective,
    PaddingDirective
} from './directives';

import { LastItemPipe } from './pipes';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        PaddingDirective,
        MarginDirective,
        AppPrimaryNavbarComponent,
        AppSecondaryNavbarComponent,
        AppSubNavbarComponent,
        AppSideNavbarComponent,
        LastItemPipe
    ],
    exports: [
        AppPrimaryNavbarComponent,
        AppSecondaryNavbarComponent,
        AppSubNavbarComponent,
        AppSideNavbarComponent,
        PaddingDirective,
        MarginDirective,
        LastItemPipe
    ]
})
export class SharedModule {}