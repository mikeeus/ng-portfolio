import { Component, OnInit } from '@angular/core';
import { GithubService, GithubContributor } from '@portfolio/open-source/src/lib/github.service';

@Component({
  selector: 'portfolio-github',
  template: `
    <div class="container">
      <div class="image"
        [ngStyle]="{'background-image': mik?.author.avatar_url }">
      </div>
      <div class="commits">{{ mik?.total }}</div>
      <div class="additions">{{ mik?.additions }}</div>
      <div class="deletions">{{ mik?.deletions }}</div>
    </div>
  `,
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  mik: GithubContributor;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getContributions('luckyframework', 'lucky_migrator').subscribe(mik => {
      this.mik = mik;
    });
  }

}
