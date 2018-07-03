import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

// App Modules
import { LayoutModule } from '@portfolio/layout';

// Containers
import * as fromContainers from './containers';
// Components
import * as fromComponents from './components';
// Guards
// import * as fromGuards from './guards';

// State
import * as fromFeature from './+state';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,

    LayoutModule,

    RouterModule.forChild([
      {
        path: '',
        component: fromContainers.LayoutComponent,
        children: [
          {
            path: '',
            component: fromContainers.PostsComponent,
            // canActivate: [fromGuards.PostsGuard]
          },
          {
            path: ':post_id',
            component: fromContainers.PostComponent
          }
        ]
      }
    ]),
  
    StoreModule.forFeature('blog', fromFeature.blogReducer),
    EffectsModule.forFeature([fromFeature.BlogEffects])
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ]
})
export class BlogModule {}
