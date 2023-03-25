import { Component, EventEmitter, Output } from '@angular/core';

import { StorageProperties } from '@ebay/core/models';
import { EbayLocalStorageService } from '@ebay/core/services';
import { IUser } from '@ebay/shared/models';

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
  
  storage = StorageProperties;

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
