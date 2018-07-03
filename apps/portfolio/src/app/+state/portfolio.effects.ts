import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  PortfolioActions,
  PortfolioActionTypes,
  LoadPortfolio,
  PortfolioLoaded
} from './portfolio.actions';
import { PortfolioState } from './portfolio.reducer';

@Injectable()
export class PortfolioEffects {
  @Effect()
  effect$ = this.actions$.ofType(PortfolioActionTypes.PortfolioAction);

  constructor(
    private actions$: Actions
  ) {}
}
