import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatIconModule, MatToolbarModule } from '@angular/material';

import { NxModule } from '@nrwl/nx';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { LayoutModule } from '@portfolio/layout';
import { ProjectsModule } from '@portfolio/projects';
import { OpenSourceModule } from '@portfolio/open-source';

import { AppComponent } from './app.component';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';

// State
import * as fromRoot from './+state';
import { RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromUtils from './utils';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: fromContainers.HomeComponent
      },
      {
        path: 'blog',
        loadChildren: '@portfolio/blog/src/lib/blog.module#BlogModule',
        data: { title: 'Blog' }
      }
    ], { initialNavigation: 'enabled' }),
    
    MatIconModule,
    MatToolbarModule,

    NxModule.forRoot(),

    ScrollToModule.forRoot(),

    LayoutModule,
    ProjectsModule,
    OpenSourceModule,

    StoreModule.forRoot(
      {
        portfolio: fromRoot.portfolioReducer,
        router: routerReducer
      },
      // {
      //   initialState : { portfolio : portfolioInitialState },
      //   metaReducers : !environment.production ? [storeFreeze] : []
      // }
    ),
    EffectsModule.forRoot([fromRoot.PortfolioEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
  ],
  declarations: [
    AppComponent,
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  bootstrap: [AppComponent],
  providers: [
    fromRoot.PortfolioEffects,
    { provide: RouterStateSerializer, useClass: fromUtils.CustomSerializer }
  ]
})
export class AppModule {}
