import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { IBrand } from '@ebay/home/models';

import { EditEntityService } from '../../services';
import { BaseEntityFormComponent } from '../base-entity-form';

@Component({
  selector: 'brand-form',
  templateUrl: './brand-form.component.html',
})
export class BrandFormComponent extends BaseEntityFormComponent<IBrand> {
  constructor(
    override readonly editEntityService: EditEntityService,
    override readonly activatedRoute: ActivatedRoute,
    override readonly matDialog: MatDialog
  ) {
    super(editEntityService, activatedRoute, matDialog)
  }
}
