import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import * as fromComponents from './components';
import * as fromContainers from './containers';
// import * as fromGuards from './guards';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: fromContainers.PostsComponent
      }
    ])
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class BlogModule {}
