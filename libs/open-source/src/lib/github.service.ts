import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getContributions(repoOwner: string, repo: string) {
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
          total: mik.total,
          additions: additions,
          deletions: deletions,
          author: mik.author
        }
      }),
      tap(res => console.log('res: ', res))
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

export interface GithubContributor {
  total: number,
  additions: number,
  deletions: number,
  author: any
}
