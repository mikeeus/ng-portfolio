import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: any;
}

// export const getRouterState

export class CustomSerializer implements 
  fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    let params = state.params;
    let data = state.data;
    while(state.firstChild) {
      state = state.firstChild;
      params = { ...params, ...state.params };
      data = { ...data, ...state.data };
    }

    return { url, queryParams, params, data };
  }
}
