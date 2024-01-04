import { Component, Input } from '@angular/core';

import { ICrumb } from '../../models';

@Component({
  selector: 'crumb',
  templateUrl: './crumb.component.html',
  styleUrls: ['./crumb.component.scss'],
})
export class CrumbComponent {
  @Input() crumb: ICrumb;

  resolved(crumb: ICrumb): void {
    this.crumb = { ... this.crumb, ... crumb };
  }
}