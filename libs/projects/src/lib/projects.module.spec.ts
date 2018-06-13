import { async, TestBed } from '@angular/core/testing';
import { ProjectsModule } from './projects.module';

describe('ProjectsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ProjectsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ProjectsModule).toBeDefined();
  });
});
