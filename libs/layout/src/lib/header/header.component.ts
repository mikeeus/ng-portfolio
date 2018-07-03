import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'portfolio-header',
  template: `
    <mat-toolbar>
      <mat-toolbar-row>
        <div class="name"
          (click)="selectLink.emit('#top')">
          Mikias Abera
        </div>
    
        <nav>
          <ng-container *ngFor="let navLink of navLinks">
            <a *ngIf="navLink.target" (click)="selectLink.emit(navLink.target)">
              {{ navLink.label }}
            </a>

            <a *ngIf="navLink.link"
              routerLink="navLink.link"
              routerLinkActive="active">
              {{ navLink.label }}
            </a>
          </ng-container>
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
        class="nav-link" (click)="selectLink.emit(navLink.target)"
        (click)="menuOpen = false">
        {{ navLink.label }}
      </mat-toolbar-row>
    </mat-toolbar>
    
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navLinks: { target?: string, label: string };
  @Output() selectLink = new EventEmitter<string>();

  menuOpen = false;

  constructor() {}

  ngOnInit() {}
}
