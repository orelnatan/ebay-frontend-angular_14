import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
    BrandCardComponent,
    CategoryCardComponent,
    EntityCardComponent,
    FamilyCardComponent,
} from './components';

@NgModule({
    declarations: [
        EntityCardComponent,
        BrandCardComponent,
        CategoryCardComponent,
        FamilyCardComponent
    ],
    imports: [ 
        RouterModule,
    ],
    exports: [
        BrandCardComponent,
        CategoryCardComponent,
        FamilyCardComponent
    ]
})
export class CardsModule {}