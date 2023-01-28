import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { 
    AppPrimaryNavbarComponent,
    AppSecondaryNavbarComponent,
    AppSubNavbarComponent,
    AppSideNavbarComponent,
    ObservableResolverComponent
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
        MatSnackBarModule,
        ReactiveFormsModule,
        HttpClientModule,
        PaddingDirective,
        MarginDirective,
        AppPrimaryNavbarComponent,
        AppSecondaryNavbarComponent,
        AppSubNavbarComponent,
        AppSideNavbarComponent,
        ObservableResolverComponent,
        LastItemPipe
    ],
    exports: [
        AppPrimaryNavbarComponent,
        AppSecondaryNavbarComponent,
        AppSubNavbarComponent,
        AppSideNavbarComponent,
        ObservableResolverComponent,
        PaddingDirective,
        MarginDirective,
        LastItemPipe
    ],
    providers: [
        { 
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 6000, horizontalPosition: "left" } 
        },
    ]
})
export class SharedModule {}