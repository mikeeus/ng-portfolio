import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// App Modules
import { LayoutModule } from '@portfolio/layout';

// import * as fromComponents from './components';
import * as fromContainers from './containers';
// import * as fromGuards from './guards';

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
    ])
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class BlogModule {}
