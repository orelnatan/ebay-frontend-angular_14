import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ebay/shared/layout';
import { DirectivesModule } from '@ebay/shared/directives';
import { ElementsGridModule, PageLoaderModule} from '@ebay/shared/components';
import { FamilyCardModule } from '@ebay/home/components';
import { PipesModule } from '@ebay/home/pipes';

import { FamiliesPageComponent } from './families-page.component';

const FAMILIES_ICON: string = "../../../../assets/images/svg/account_tree_white.svg";

@NgModule({
  declarations: [
    FamiliesPageComponent,
  ],
  imports: [ 
    CommonModule,
    LayoutModule,
    FamilyCardModule,
    PageLoaderModule,
    DirectivesModule,
    ElementsGridModule,
    PipesModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'families', pathMatch: 'full' },
      { 
        path: 'families',
        component: FamiliesPageComponent,
        data: {
          redirect: {
            route: "home/brands/brandId/categories",
          },
          crumbs: [
            {
              path: "families",
              name: "Families",
              image: FAMILIES_ICON
            }
          ]
        }
      },
    ])
  ]
})
export class FamiliesPageModule {}