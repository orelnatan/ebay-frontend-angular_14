import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { IProduct } from '@ebay/home/models';

import { EditEntityService } from '../../services';
import { BaseEntityFormComponent } from '../base-entity-form';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent extends BaseEntityFormComponent<IProduct> {
  constructor(
    override readonly editEntityService: EditEntityService,
    override readonly activatedRoute: ActivatedRoute,
    override readonly matDialog: MatDialog
  ) {
    super(editEntityService, activatedRoute, matDialog)
  }
}
