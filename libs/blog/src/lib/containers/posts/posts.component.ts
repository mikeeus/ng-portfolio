import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-blog-posts',
  template: `
    <div class="container">
      <h1>Latest Posts</h1>
      ...
    </div>
  `,
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
