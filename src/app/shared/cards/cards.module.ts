import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
    BrandCardComponent,
    CategoryCardComponent,
    EntityCardComponent,
} from './components';

@NgModule({
    declarations: [
        EntityCardComponent,
        BrandCardComponent,
        CategoryCardComponent
    ],
    imports: [ 
        RouterModule,
    ],
    exports: [
        BrandCardComponent,
        CategoryCardComponent
    ]
})
export class CardsModule {}