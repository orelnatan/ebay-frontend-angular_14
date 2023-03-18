import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { EbayLocalStorageService } from '@ebay/core/services';
import { IUser } from '@ebay/auth/models';

const AVATAR_EMPTY: string = "../../../../assets/images/png/avatar_empty.png";
const GUEST_HELLO_TEXT: string = "Hi, Hello There Guest!";
const USER_HELLO_TEXT: string = "Hi, Welcome back ";

@Component({
  selector: 'primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.scss'],
})
export class PrimaryNavbarComponent {
  @Output() logout: EventEmitter<void> = new EventEmitter();
  
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
