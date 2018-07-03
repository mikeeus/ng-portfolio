import { Component, OnInit } from '@angular/core';

import * as fromFeature from '../../+state';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Post } from '@portfolio/models';

@Component({
  selector: 'portfolio-post',
  template: `
    <div class="container">
      <div class="post" *ngIf="post$ | async as post">
        {{ post | json }}
      </div>
    </div>
  `,
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$: Observable<{ data: Post, loading: boolean, loaded: boolean }>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.post$ = this.store.select(fromFeature.getViewedPost);
  }

}
