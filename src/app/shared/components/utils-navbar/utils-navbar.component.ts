import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, Event as RouterNavigationEvent } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { GlobalEventTypes } from '@ebay/core/models';
import { dispatch } from '@ebay/shared/global-events';

import { SearchboxComponent } from './components';

@UntilDestroy()
@Component({
  selector: 'utils-navbar',
  templateUrl: './utils-navbar.component.html',
  styleUrls: ['./utils-navbar.component.scss'],
})
export class UtilsNavbarComponent {
  @ViewChild(SearchboxComponent, { static: true }) searchbox: SearchboxComponent;
  
  constructor(
    private readonly router: Router,
  ) {     
    this.router.events.pipe(untilDestroyed(this))
    .subscribe((event: RouterNavigationEvent): void => {
      if(event instanceof NavigationEnd) {
        this.searchbox.setValue(null!);
      }
    })
  }

  dispatchSearch(keyword: string): void {
    dispatch(GlobalEventTypes.Search, {
      keyword
    })
  }
}
