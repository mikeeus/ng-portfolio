import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { BlogEffects } from './blog.effects';
import { LoadBlog, BlogLoaded } from './blog.actions';

import { Observable } from 'rxjs';

describe('BlogEffects', () => {
  let actions$: Observable<any>;
  let effects$: BlogEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        BlogEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(BlogEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadBlog({}) });
      expect(effects$.loadBlog$).toBeObservable(
        hot('-a-|', { a: new BlogLoaded({}) })
      );
    });
  });
});
