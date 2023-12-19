import { Component, Input, OnChanges } from '@angular/core';

import { ICrumb } from '../../models';

@Component({
  selector: 'crumb',
  templateUrl: './crumb.component.html',
  styleUrls: ['./crumb.component.scss'],
})
export class CrumbComponent implements OnChanges {
  @Input() crumb: ICrumb;

  loading: boolean;
  
  ngOnChanges(): void {
    this.crumb?.async ? this.resolveAsyncCrumb(this.crumb.async) : null;
  }

  resolveAsyncCrumb(asyncCrumb: Promise<ICrumb>): void {
    this.loading = true;

    asyncCrumb.then((crumb: ICrumb): void => {
      this.crumb = { ... this.crumb, ... crumb };

      this.loading = false;
    });
  }
}