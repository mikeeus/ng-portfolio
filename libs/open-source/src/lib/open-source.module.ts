import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GithubComponent } from './github/github.component';
import { GithubService } from './github.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [GithubComponent],
  providers: [GithubService],
  exports: [GithubComponent]
})
export class OpenSourceModule {}
