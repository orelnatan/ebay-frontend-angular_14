import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { EbayLocalStorageService } from '@ebay/core/services';
import { StorageKeys } from '@ebay/core/models';
import { IUser } from '@ebay/auth/models';

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
  ) {}

  get user$(): Observable<IUser> {
    return this.ebayLocalStorageService.retrieve<IUser>(StorageKeys.User);
  }
}
