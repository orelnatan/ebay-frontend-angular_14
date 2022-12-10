import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  standalone: true,
})
export class PageLayoutComponent {
  @Input() deployOnFullScreenHeight: boolean;
  @Input() deployOnFullScreenWidth: boolean;

}
