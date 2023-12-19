import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { IFamily } from '@ebay/home/models';

import { EditEntityService } from '../../services';
import { BaseEntityFormComponent } from '../base-entity-form';

@Component({
  selector: 'family-form',
  templateUrl: './family-form.component.html',
})
export class FamilyFormComponent extends BaseEntityFormComponent<IFamily> {
  constructor(
    override readonly editEntityService: EditEntityService,
    override readonly activatedRoute: ActivatedRoute,
    override readonly matDialog: MatDialog
  ) {
    super(editEntityService, activatedRoute, matDialog)
  }
}
