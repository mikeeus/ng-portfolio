import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-languages',
  template: `
    <div class="container">
      <div class="languages">
        <mat-icon class="fill-white" svgIcon="typescript"></mat-icon>
        <mat-icon class="fill-white" svgIcon="ruby"></mat-icon>
        <mat-icon class="fill-white" svgIcon="javascript"></mat-icon>
        <mat-icon svgIcon="crystal"></mat-icon>
        <mat-icon class="fill-white" svgIcon="sass"></mat-icon>
        </div>
        <!-- <mat-icon class="fill-white" svgIcon="html5"></mat-icon> -->

      <div class="tools">
        <mat-icon class="fill-white" svgIcon="angular"></mat-icon>
        <mat-icon class="fill-white" svgIcon="rails"></mat-icon>
        <mat-icon class="fill-white" svgIcon="nodejs"></mat-icon>
        <mat-icon class="fill-white" svgIcon="git"></mat-icon>
        <mat-icon class="fill-white" svgIcon="postgresql"></mat-icon>
      </div>
    </div>
  `,
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
