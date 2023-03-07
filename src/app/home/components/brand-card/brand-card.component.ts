import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IBrand } from '@ebay/home/models';

@Component({
  selector: 'brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss'],
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class BrandCardComponent {
    @Input() brand: IBrand;
   
}
