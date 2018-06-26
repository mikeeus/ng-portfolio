import { Component, OnInit } from '@angular/core';
import { GithubService, GithubContributor } from '@portfolio/open-source/src/lib/github.service';

import { map, tap, combineLatest } from 'rxjs/operators';

@Component({
  selector: 'portfolio-github',
  template: `
    <div class="container">
      <div class="contribution" *ngFor="let c of [contributions['lucky_migrator'], contributions['lucky_record']]">
        <ng-container *ngIf="c.stats; else loading">
          <h3><small>https://github.com/luckyframework/</small>{{ c.stats.repo }}</h3>
          <div class="stats">
            <div class="commits">
              commits: <strong>{{ c.stats.total }}</strong>
            </div>
            <div class="additions">
              additions: <strong>{{ c.stats.additions }}</strong>
            </div>
            <div class="deletions">
              deletions: <strong>{{ c.stats.deletions }}</strong>
            </div>
          </div>
          <div class="info">
            <img src="{{ c.stats.author.avatar_url }}">
            <div class="features">
              <div class="feature" *ngFor="let f of c.features">
                <a href="https://github.com/{{c.stats.repoOwner}}/{{c.stats.repo}}/commit/{{f.commit}}">
                  <div class="commit-hash">#{{ f.commit.slice(0,5) + '...' }}</div>
                  {{ f.desc }}
                </a>
              </div>
            </div>
          </div>
        </ng-container>

        <ng-template #loading>Loading...</ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  contributions: { [key: string]: GithubContributor} = {
    lucky_migrator: {
      stats: null,
      features: [
        { commit: '811f830b4ee477fb20096c12968ca4d22ccbf2f7', desc: 'Executed migrations in a transaction' },
        { commit: 'd347494e2add07bfd37f148faed1fdbc18bcf217', desc: 'Add DSL for inline indices' },
        { commit: '5e3ac63a3f74c118705ca5c82ebe8bfc9a599f9e', desc: 'Add belongs_to macro in migration' },
      ]
    },
    lucky_record: {
      stats: null,
      features: [
        { commit: 'c08629df0c698cb693aac1da98f938aa0c386813', desc: 'Add join support' },
        { commit: 'f0dde81a3b329b5af082f814eb33389a217f7a1b', desc: 'Add has one association' },
        { commit: '8607673e9d6fe43382ee06eb55ba7fdbecad83f4', desc: 'Add #in query' }
      ]
    }
  }

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getContributions('luckyframework', 'lucky_migrator')
      .pipe(
        combineLatest(this.githubService.getContributions('luckyframework', 'lucky_record'))
      )
      .subscribe(res => {
        res.forEach(r => this.contributions[r.repo].stats = r);
        console.log('r: ', res);
      });
  }
}
