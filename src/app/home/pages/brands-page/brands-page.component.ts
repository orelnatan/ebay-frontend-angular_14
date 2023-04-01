import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BrandsService } from '@ebay/home/services';
import { IBrand } from '@ebay/shared/cards/models';

@Component({
  selector: 'brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent {
    brands$: Observable<IBrand[]> = this.brandsService.fetchAll();

    constructor(
        public readonly brandsService: BrandsService
    ) {}
}
