import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { EbayLocalStorageService } from '@ebay/core/services';
import { GlobalEventTypes, StorageKeys } from '@ebay/core/models';
import { IUser } from '@ebay/auth/models';
import { GlobalEventsService } from '@ebay/shared/global-events';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent {
  @Output() logout: EventEmitter<void> = new EventEmitter();
  
  keys: typeof StorageKeys = StorageKeys;

  constructor(
    public readonly ebayLocalStorageService: EbayLocalStorageService,
    private readonly globalEventsService: GlobalEventsService
  ) {}

  get user$(): Observable<IUser> {
    return this.ebayLocalStorageService.retrieve<IUser>(StorageKeys.User);
  }

  toggleSidebar(): void {
    this.globalEventsService.dispatch(
        GlobalEventTypes.Sidebar
    )
  }
}
