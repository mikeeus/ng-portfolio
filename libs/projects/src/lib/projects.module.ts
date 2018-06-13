import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { DragScrollModule } from 'ngx-drag-scroll';

import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [CommonModule, MatIconModule, DragScrollModule],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}
