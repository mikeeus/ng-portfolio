import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'portfolio-root',
  template: `
    <div id="top"></div>
    <portfolio-header (scrollTo)="scrollTo($event)"></portfolio-header>

    <div id="splash">
      <div class="gradient"></div>
      <div class="content">
        <h1>Mikias Abera</h1>
  
        <portfolio-fake-terminal></portfolio-fake-terminal>
  
        <div class="social">
          <a href="https://github.com/mikeeus">
            <mat-icon svgIcon="github"></mat-icon>
          </a>
          <a href="https://linkedin.com/in/mikeeus">
            <mat-icon svgIcon="linkedin"></mat-icon>
          </a>
        </div>

        <portfolio-languages></portfolio-languages>
      </div>
    </div>

    <div id="container">
      
      <section id="portfolio">
        <h2>Portfolio</h2>
        <portfolio-projects></portfolio-projects>
      </section>
      
      <section id="open-source">
        <h2>Open Source</h2>
        <portfolio-github></portfolio-github>
      </section>
      
      <section id="contact">
        <h2>Contact</h2>
        <portfolio-contact-form></portfolio-contact-form>
      </section>

      <footer>
        <div>Designed and built with love by Mikias Abera</div>
        <div class="social">
          <a href="https://www.linkedin.com/in/mikeeus">linkedin</a>
          <a href="https://www.github.com/mikeeus">Github</a>
        </div>
      </footer>
    </div>
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
    private scrollToService: ScrollToService,
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

  scrollTo(target) {
    this.scrollToService.scrollTo({ target: target, offset: -64 })
  }
}
