import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Post } from '@portfolio/models';

@Component({
  selector: 'portfolio-post-card',
  template: `
    <div class="container">
      <div class="primary">
        <div class="tags">{{ post.tags }}</div>
        <div class="title">{{ post.title }}</div>
        <div class="preview">{{ post.content.slice(0, 100) }}</div>
        <a [routerLink]="['/blog/', post.id]">
          Read Article <mat-icon>arrow_forwards</mat-icon>
        </a>
      </div>
      <div class="secondary">
        <div class="image"
          [ngStyle]="{ 'background-image': post.cover }">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
