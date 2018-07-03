import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatIconModule, MatToolbarModule } from '@angular/material';

import { NxModule } from '@nrwl/nx';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { LayoutModule } from '@portfolio/layout';
import { ProjectsModule } from '@portfolio/projects';
import { OpenSourceModule } from '@portfolio/open-source';

import { AppComponent } from './app.component';

// Components
import * as fromComponents from './components';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'blog',
        loadChildren: '@portfolio/blog/src/lib/blog.module#BlogModule',
        data: { title: 'Blog' }
      }
    ], { initialNavigation: 'enabled' }),
    
    MatIconModule,
    MatToolbarModule,

    NxModule.forRoot(),

    ScrollToModule.forRoot(),

    LayoutModule,
    ProjectsModule,
    OpenSourceModule,
  ],
  declarations: [
    AppComponent,
    ...fromComponents.components
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
