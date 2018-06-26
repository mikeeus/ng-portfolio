import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule, MatToolbarModule } from '@angular/material';

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
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    ScrollToModule.forRoot(),
    LayoutModule,
    ProjectsModule,
    OpenSourceModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    AppComponent,
    ...fromComponents.components
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
