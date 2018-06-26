import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getContributions(repoOwner: string, repo: string): 
    Observable<GithubContributorStats> {
    return this.http.get(this.makeUrl(repoOwner, repo)).pipe(
      map((res: any[]) => 
        res.filter((c: any) => c['author']['login'] === 'mikeeus')[0]
      ),
      map((mik: GithubContributorResponse) => {
        let additions = 0;
        let deletions = 0;
        mik.weeks.forEach(x => {
          additions += x.a;
          deletions += x.d;
        })
        return {
          repo,
          repoOwner,
          total: mik.total,
          additions,
          deletions,
          author: mik.author
        }
      })
    );
  }

  private makeUrl(repoOwner: string, repo: string) {
    return `https://api.github.com/repos/${repoOwner}/${repo}/stats/contributors`
  }
}

export interface GithubContributorResponse {
  total: number,
  weeks: {
    w: number,
    a: number,
    d: number,
    c: number
  }[],
  author: any
}

export interface GithubContributorStats {
  repo: string;
  repoOwner: string;
  total: number;
  additions: number;
  deletions: number;
  author: any;
}

export interface GithubContributor{
  stats: GithubContributorStats;
  features: { commit: string, desc: string }[];
}
