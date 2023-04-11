import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
    BrandCardComponent,
    CategoryCardComponent,
    EntityCardComponent,
    FamilyCardComponent,
    ProductCardComponent,
} from './components';

@NgModule({
    declarations: [
        EntityCardComponent,
        BrandCardComponent,
        CategoryCardComponent,
        FamilyCardComponent,
        ProductCardComponent
    ],
    imports: [ 
        RouterModule,
    ],
    exports: [
        BrandCardComponent,
        CategoryCardComponent,
        FamilyCardComponent,
        ProductCardComponent
    ]
})
export class CardsModule {}