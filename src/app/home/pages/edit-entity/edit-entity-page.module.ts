import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { LayoutModule } from '@ebay/shared/layout';
import { EbFormsModule } from '@ebay/shared/eb-forms';
import { UtilsModule } from '@ebay/shared/utils';
import { CrumbsNavbarModule, PageLoaderModule } from '@ebay/shared/components';

import { EditEntityPageRoutingModule } from './edit-entity-page-routing.module';
import { EditEntityPageComponent } from './edit-entity-page.component';
import { 
  BrandFormComponent,
  CategoryFormComponent,
  EntityFormComponent,
  FamilyFormComponent,
  ProductFormComponent
} from './components';

import { EntityResolver } from './resolvers';
import { EntityFormGuard } from './guards';

@NgModule({
  declarations: [
    EditEntityPageComponent,
    EntityFormComponent,
    BrandFormComponent,
    CategoryFormComponent,
    FamilyFormComponent,
    ProductFormComponent
  ],
  imports: [ 
    CommonModule,
    LayoutModule,
    CrumbsNavbarModule,
    EditEntityPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EbFormsModule,
    MatDialogModule,
    MatButtonModule,
    UtilsModule,
    PageLoaderModule
  ],
  providers: [
    EntityResolver,
    EntityFormGuard
  ]
})
export class EditEntityPageModule {}