import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { 
    LoaderDirective,
    MarginDirective,
    NgLetDirective,
    PaddingDirective,
    RxResolverDirective
} from './directives';

import { 
    ElementsGridComponent,
    ModalComponent,
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
        RxResolverDirective,
        NgLetDirective,
        PaddingDirective,
        LoaderDirective,
        MarginDirective,
        ElementsGridComponent,
        ModalComponent,
        SpinnerComponent,
        LoaderModalComponent,
        AlertModalComponent,
    ],
    exports: [
        RxResolverDirective,
        NgLetDirective,
        PaddingDirective,
        MarginDirective,
        LoaderDirective,
        ModalComponent,
        SpinnerComponent,
        LoaderModalComponent,
        AlertModalComponent,
        ElementsGridComponent,
    ],
    providers: [
        { 
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: { duration: 6000, horizontalPosition: "left" } 
        },
    ]
})
export class SharedModule {}