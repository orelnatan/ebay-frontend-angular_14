import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { EntityCrumbResolver } from './entity-crumb.resolver';
import { FamiliesService } from '../services';
import { EntityType } from '../models';

@Injectable()
export class FamilyCrumbResolver extends EntityCrumbResolver {
  constructor(
    override readonly titleCasePipe: TitleCasePipe,
    override readonly service: FamiliesService
  ) {
    super(titleCasePipe, service, EntityType.Family, EntityType.Category)
  }
}