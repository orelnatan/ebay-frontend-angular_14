import { Component, EventEmitter, Output } from '@angular/core';

import { EbayLocalStorageService } from '@ebay/core/services';
import { StorageKeys } from '@ebay/core/models';
import { IUser } from '@ebay/auth/models';

const AVATAR_EMPTY: string = "../../../../assets/images/png/avatar_empty.png";
const GUEST_HELLO_TEXT: string = "Hi, Hello There Guest!";
const USER_HELLO_TEXT: string = "Hi, Welcome back ";

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

  getUserAvatar(user: IUser | null): string {  
    return user?.avatar || AVATAR_EMPTY;
  }

  getGreetingText(user: IUser | null): string {
    return user ? `${USER_HELLO_TEXT}${user.name}` : GUEST_HELLO_TEXT;
  }
}
