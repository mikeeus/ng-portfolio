import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../utils';

export * from './portfolio.actions';
export * from './portfolio.effects';
export * from './portfolio.reducer';

export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');
