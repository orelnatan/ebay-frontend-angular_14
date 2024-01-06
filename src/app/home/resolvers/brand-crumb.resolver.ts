import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { EntityCrumbResolver } from './entity-crumb.resolver';
import { BrandsService } from '../services';
import { EntityType } from '../models';

@Injectable()
export class BrandCrumbResolver extends EntityCrumbResolver {
  constructor(
    override readonly titleCasePipe: TitleCasePipe,
    override readonly service: BrandsService
  ) {
    super(titleCasePipe, service, EntityType.Brand)
  }
}