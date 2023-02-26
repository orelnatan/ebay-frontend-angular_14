import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { 
    LoaderDirective,
    MarginDirective,
    PaddingDirective
} from './directives';

import { 
    ModalComponent,
    ObservableResolverComponent,
    SpinnerComponent,
} from './components';

import { 
    LoaderModalComponent,
    AlertModalComponent
} from './modals';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        PaddingDirective,
        LoaderDirective,
        MarginDirective,
        ObservableResolverComponent,
        ModalComponent,
        SpinnerComponent,
        LoaderModalComponent,
        AlertModalComponent
    ],
    exports: [
        PaddingDirective,
        MarginDirective,
        LoaderDirective,
        ObservableResolverComponent,
        ModalComponent,
        SpinnerComponent,
        LoaderModalComponent,
        AlertModalComponent
    ],
    providers: [
        { 
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 6000, horizontalPosition: "left" } 
        },
    ]
})
export class SharedModule {}