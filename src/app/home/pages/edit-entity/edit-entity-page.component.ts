import { AfterViewInit, Component, Injector, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { EntitiesAbstractService } from '@ebay/home/services';
import { EntityType, IEntity } from '@ebay/home/models';
import { RedirectService } from '@ebay/shared/redirect';

import { EditEntityService } from './services';
import { EditEntityModalComponent } from './modals';
import { EditType } from './models';

@UntilDestroy()
@Component({
  selector: 'edit-entity-page',
  templateUrl: './edit-entity-page.component.html',
  styleUrls: ['./edit-entity-page.component.scss'],
  providers: [EditEntityService]
})
export class EditEntityPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef, { static: true }) templateRef: TemplateRef<RouterOutlet>;

  edit$: Observable<IEntity>;

  service: EntitiesAbstractService = this.injector.get<EntitiesAbstractService>(this.activatedRoute.snapshot.data['service']);
  type: EntityType = this.activatedRoute.snapshot.data['type'];
  id: string = this.activatedRoute.snapshot.queryParamMap.get("entityId")!;
  
  constructor(
    private readonly injector: Injector,
    private readonly router: Router,
    private readonly matDialog: MatDialog,
    private readonly activatedRoute: ActivatedRoute,
    private readonly redirectService: RedirectService,
    private readonly editEntityService: EditEntityService,
  ) {
    this.editEntityService.submit(EditType.Create, (entity: IEntity) => {
      console.log("Create", entity);
    })

    this.editEntityService.submit(EditType.Update, (entity: IEntity) => {
      console.log("Update", entity);
    })

    this.editEntityService.submit(EditType.Discard, () => {
      this.exit();
    })
  }

  ngAfterViewInit(): void { 
    this.matDialog.open(EditEntityModalComponent, { data: {
      template: this.templateRef
    }, disableClose: true })
    .backdropClick()
    .pipe(untilDestroyed(this))
    .subscribe(() => {
      this.exit();
    })
  }

  ngOnDestroy(): void {
    this.matDialog.closeAll();
  }

  exit(forceExit?: boolean): void {
    this.router.navigateByUrl(this.redirectService.url$.getValue(), {
      state: { forceExit }
    });
  }

  success(): void {

  }

  error(): void {

  }
}
