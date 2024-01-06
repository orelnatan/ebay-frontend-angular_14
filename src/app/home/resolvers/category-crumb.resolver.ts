import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { EntityCrumbResolver } from './entity-crumb.resolver';
import { CategoriesService } from '../services';
import { EntityType } from '../models';

@Injectable()
export class CategoryCrumbResolver extends EntityCrumbResolver {
  constructor(
    override readonly titleCasePipe: TitleCasePipe,
    override readonly service: CategoriesService
  ) {
    super(titleCasePipe, service, EntityType.Category, EntityType.Brand)
  }
}