import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-layout',
  template: `
    <portfolio-header
      [navLinks]="navLinks"
      (selectLink)="select($event)">
    </portfolio-header>

    <div class="container">
      <router-outlet></router-outlet>
    </div>

    <footer>
      Footer
    </footer>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  navLinks = [
    {
      link: '/#portfolio',
      label: 'Portfolio'
    },
    {
      link: '/#open-source',
      label: 'Open Source'
    },
    {
      link: '/#contact',
      label: 'Contact'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  select(link) {
    console.log('selected: ', link);
  }
}
