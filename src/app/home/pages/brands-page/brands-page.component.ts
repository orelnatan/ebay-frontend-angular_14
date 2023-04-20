import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BrandsService } from '@ebay/home/services';
import { IBrand } from '@ebay/home/models';

@Component({
    selector: 'brands-page',
    templateUrl: './brands-page.component.html',
    styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent implements OnInit {
    brands$: Observable<IBrand[]>;

    constructor(
        public readonly brandsService: BrandsService
    ) {}

    ngOnInit(): void {
        this.brands$ = this.brandsService.fetchAll();
    }
}
