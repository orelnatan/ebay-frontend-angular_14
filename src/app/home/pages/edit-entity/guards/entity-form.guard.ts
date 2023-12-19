import { Injectable, } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';

import { RouterNavigationState } from '@ebay/core/models';
import { IEntity } from '@ebay/home/models';

import { BaseEntityFormComponent } from '../components/base-entity-form';

@Injectable()
export class EntityFormGuard implements CanDeactivate<BaseEntityFormComponent<IEntity>> {
  constructor(
    private readonly router: Router
  ){}

  canDeactivate(component: BaseEntityFormComponent<IEntity>): Promise<boolean> {
    const state: RouterNavigationState = this.router.getCurrentNavigation()!.extras.state || {};

    return component?.canLeave(state?.['forceExit']);
  }
}