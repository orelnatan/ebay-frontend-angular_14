import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IBrand } from '@ebay/home/models';
import { BrandsService } from '@ebay/home/services';

@Component({
  selector: 'brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent {
    brands$: Observable<IBrand[]> = this.brandsService.fetchAll();

    constructor(
        private readonly brandsService: BrandsService
    ) {}
}
