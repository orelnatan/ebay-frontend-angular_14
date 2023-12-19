import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { IEntity } from '@ebay/home/models';
import { DiscardChangesModalComponent } from '@ebay/shared/modals';

import { EditEntityService } from '../../services';
import { EditType } from '../../models';

@UntilDestroy()
@Component({
  selector: 'base-entity-form',
  template: ``
})
export class BaseEntityFormComponent<T> {
  entity$: Observable<T> = this.activatedRoute.snapshot.data["entity"];

  originEntity: T;
  cloneEntity: T;

  constructor(
    readonly editEntityService: EditEntityService,
    readonly activatedRoute: ActivatedRoute,
    readonly matDialog: MatDialog,
  ) {}

  create(entity: IEntity): void {
    this.editEntityService.edit(EditType.Create, entity);
  }
  
  update(entity: IEntity): void {
    this.editEntityService.edit(EditType.Update, entity);
  }

  discard(): void {
    this.editEntityService.edit(EditType.Discard);
  }

  unsavedChanges(): boolean {
    return JSON.stringify(this.originEntity) !== JSON.stringify(this.cloneEntity);
  }

  setEntity(entity: T): void {
    this.originEntity = entity;
    
    this.cloneEntity = { ...entity };
  }

  canLeave(forceExit: boolean): Promise<boolean> {
    return new Promise((resolve) => {
      if(!this.unsavedChanges() || forceExit) { resolve(true) };

      this.matDialog.open(DiscardChangesModalComponent)
      .afterClosed()
      .pipe(untilDestroyed(this))
      .subscribe((discard: boolean) => {
        resolve(discard || false);
      })
    })
  }
}
