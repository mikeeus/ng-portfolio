import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromFeature from '../../+state';
import { Post } from '@portfolio/models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'portfolio-blog-posts',
  template: `
    <div class="container">
      <h1>Latest Posts</h1>
      <div class="posts">
        {{ posts | async | json }}
      </div>
    </div>
  `,
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Observable<{data: Post[], loading: boolean, loaded: boolean}>;

  constructor(private store: Store<fromFeature.BlogState>) {}

  ngOnInit() {
    this.posts = this.store.select(fromFeature.getPosts);
  }

}
