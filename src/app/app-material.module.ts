import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
      MatButtonModule,
      MatBadgeModule,
      MatProgressSpinnerModule, 
      MatAutocompleteModule,
      MatCheckboxModule,
      MatInputModule,
      MatIconModule,
      MatDatepickerModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatChipsModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatProgressBarModule,
      MatDialogModule,
      MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule, 
    MatAutocompleteModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    MatRadioModule,
  ],
  providers: [
      { 
          provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 6000, horizontalPosition: "left" } 
      },
  ]
  
})
export class AppMaterialModule {}