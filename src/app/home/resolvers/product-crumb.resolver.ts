import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { EntityCrumbResolver } from './entity-crumb.resolver';
import { ProductsService } from '../services';
import { EntityType } from '../models';

@Injectable()
export class ProductCrumbResolver extends EntityCrumbResolver<EntityType.Product, EntityType.Family, ProductsService> {
  constructor(
    override readonly titleCasePipe: TitleCasePipe,
    override readonly service: ProductsService
  ) {
    super(titleCasePipe, service, EntityType.Product, EntityType.Family)
  }
}