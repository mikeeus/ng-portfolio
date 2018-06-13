import { async, TestBed } from '@angular/core/testing';
import { OpenSourceModule } from './open-source.module';

describe('OpenSourceModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [OpenSourceModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(OpenSourceModule).toBeDefined();
  });
});
