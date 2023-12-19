import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ICategory } from '@ebay/home/models';

import { EditEntityService } from '../../services';
import { BaseEntityFormComponent } from '../base-entity-form';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
})
export class CategoryFormComponent extends BaseEntityFormComponent<ICategory> {
  constructor(
    override readonly editEntityService: EditEntityService,
    override readonly activatedRoute: ActivatedRoute,
    override readonly matDialog: MatDialog
  ) {
    super(editEntityService, activatedRoute, matDialog)
  }
}
