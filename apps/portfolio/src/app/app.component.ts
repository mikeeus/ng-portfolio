import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'portfolio-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  icons = [
    { key: 'github', filename: 'github' },
    { key: 'linkedin', filename: 'linkedin' },
    { key: 'angular', filename: 'angular' },
    { key: 'git', filename: 'git' },
    { key: 'rails', filename: 'rails' },
    { key: 'ruby', filename: 'ruby' },
    { key: 'typescript', filename: 'typescript' },
    { key: 'javascript', filename: 'javascript' },
    { key: 'heroku', filename: 'heroku' },
    { key: 'nodejs', filename: 'nodejs' },
    { key: 'sass', filename: 'sass' },
    { key: 'postgresql', filename: 'postgresql' },
    { key: 'crystal', filename: 'crystal' },
    { key: 'html5', filename: 'html5' }
  ]

  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) {}

  ngOnInit() {
    this.registerIcons();
    // this.scrollTo('#top');
  }

  registerIcons() {
    this.icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon.key,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon.filename}.svg`)
      );
    });
  }
}
