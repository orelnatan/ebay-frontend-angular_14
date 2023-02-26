import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { EbayLocalStorageService } from 'src/app/core/services';
import { IUser } from 'src/app/auth/models';

const AVATAR_EMPTY: string = "../../../../assets/images/png/avatar_empty.png";
const GUEST_HELLO_TEXT: string = "Hi, Hello There Guest!";
const USER_HELLO_TEXT: string = "Hi, Welcome back ";

@Component({
  selector: 'primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.scss'],
  imports: [
    MatIconModule,
    CommonModule
  ],
  standalone: true,
})
export class PrimaryNavbarComponent { 
  constructor(
    public readonly ebayLocalStorageService: EbayLocalStorageService,
    private readonly routerService: Router
  ) {}

  getUserAvatar(user: IUser | null): string {  
    return user?.avatar || AVATAR_EMPTY;
  }

  getGreetingText(user: IUser | null): string {
    return user ? `${USER_HELLO_TEXT}${user.name}` : GUEST_HELLO_TEXT;
  }

  logout = (): void => {
    this.ebayLocalStorageService.clear();

    this.routerService.navigate(['/auth']);
  }
}
