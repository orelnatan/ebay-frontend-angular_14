import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { 
    LoaderDirective,
    GapDirective,
    SpaceDirective,
    NgLetDirective,
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
    declarations: [
        ElementsGridComponent,
        ModalComponent,
        SpinnerComponent,
        AlertModalComponent,
        LoaderModalComponent,
        LoaderDirective,
        GapDirective,
        SpaceDirective,
        NgLetDirective,
        RxResolverDirective,
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
    ],
    exports: [
        RxResolverDirective,
        NgLetDirective,
        SpaceDirective,
        GapDirective,
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