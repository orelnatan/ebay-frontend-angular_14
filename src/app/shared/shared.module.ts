import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { 
    MarginDirective,
    PaddingDirective
} from './directives';

import { LastItemPipe } from './pipes';

import { 
    ObservableResolverComponent
} from './components';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        PaddingDirective,
        MarginDirective,
        LastItemPipe,
        ObservableResolverComponent,
    ],
    exports: [
        PaddingDirective,
        MarginDirective,
        LastItemPipe,
        ObservableResolverComponent,
    ],
    providers: [
        { 
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 6000, horizontalPosition: "left" } 
        },
    ]
})
export class SharedModule {}