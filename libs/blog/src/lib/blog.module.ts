import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// App Modules
import { LayoutModule } from '@portfolio/layout';

// import * as fromComponents from './components';
import * as fromContainers from './containers';
// import * as fromGuards from './guards';

// State
import * as fromFeature from './+state';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    CommonModule,

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
          }
        ]
      }
    ]),
  
    StoreModule.forFeature('blog', fromFeature.blogReducer),
    EffectsModule.forFeature([fromFeature.BlogEffects])
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class BlogModule {}
