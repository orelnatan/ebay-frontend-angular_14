import { Component, Input } from '@angular/core';

import { IFamily } from '../../models';

@Component({
  selector: 'family-card',
  templateUrl: './family-card.component.html',
})
export class FamilyCardComponent {
    @Input() family: IFamily;
}
