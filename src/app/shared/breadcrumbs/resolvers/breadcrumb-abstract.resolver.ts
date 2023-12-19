import { Injectable }  from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ICrumb } from '@ebay/shared/breadcrumbs';

@Injectable()
export abstract class BreadcrumbAbstractResolver implements Resolve<Observable<Promise<ICrumb>>> {
  abstract resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<Promise<ICrumb>>
}