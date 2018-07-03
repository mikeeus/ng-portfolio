import { BlogLoaded } from './blog.actions';
import { blogReducer, initialState } from './blog.reducer';

describe('blogReducer', () => {
  it('should work', () => {
    const action: BlogLoaded = new BlogLoaded({});
    const actual = blogReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
