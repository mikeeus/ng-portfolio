import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'portfolio-header',
  template: `
    <mat-toolbar>
      <mat-toolbar-row>
        <div class="name"
          (click)="scrollTo.emit('#top')">
          Mikias Abera
        </div>
    
        <nav>
          <a *ngFor="let navLink of navLinks" (click)="scrollTo.emit(navLink.target)">
            {{ navLink.label }}
          </a>
        </nav>
    
        <button class="hamburger hamburger--collapse" type="button"
          [ngClass]="{'is-active': menuOpen}"
          (click)="menuOpen = !menuOpen">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </mat-toolbar-row>
    
      <mat-toolbar-row
        *ngFor="let navLink of navLinks"
        [ngClass]="{'is-active': menuOpen}"
        class="nav-link" (click)="scrollTo.emit(navLink.target)"
        (click)="menuOpen = false">
        {{ navLink.label }}
      </mat-toolbar-row>
    </mat-toolbar>
    
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() scrollTo = new EventEmitter<string>();

  menuOpen = false;

  navLinks = [
    {
      target: '#portfolio',
      label: 'Portfolio'
    },
    {
      target: '#open-source',
      label: 'Open Source'
    },
    {
      target: '#contact',
      label: 'Contact'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
