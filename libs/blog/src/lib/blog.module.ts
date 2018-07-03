import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  blogReducer,
  initialState as blogInitialState
} from './+state/blog.reducer';
import { BlogEffects } from './+state/blog.effects';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature('blog', blogReducer, {
      initialState: blogInitialState
    }),

    EffectsModule.forFeature([BlogEffects])
  ],
  providers: [BlogEffects]
})
export class BlogModule {}
