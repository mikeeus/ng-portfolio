import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import * as fromFeature from '../+state';
// import { Post } from '../models';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, filter, take, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class PostsGuard implements CanActivate {

  constructor(private store: Store<any>) {}

  canActivate(_route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromFeature.getViewedPost).pipe(
      tap(posts => {
        if (!posts || !posts.loaded && !posts.loading) {
          this.store.dispatch(new fromFeature.LoadPosts);
        }
      }),
      filter(posts => posts && posts.loaded),
      map(posts => posts.loaded),
      take(1)
    );
  }
}
