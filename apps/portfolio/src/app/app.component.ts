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
        <div class="open-source">
          <div class="lucky-migrator">
            <h3>Lucky Migrator</h3>
            <div class="image"></div>
            <div class="info">
            
            </div>
          </div>
          <div class="lucky-record">
            <h3>Lucky Record</h3>
            <div class="image"></div>
            <div class="info">
            
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
      </section>
      
      <section id="contact">
        <h2>Contact</h2>
      </section>

      <div class="scrollTop" [ngx-scroll-to]="'#top'">TOP</div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  icons = [
    { key: 'github', filename: 'github' },
    { key: 'linkedin', filename: 'linkedin' },
  ]

  constructor(
    private scrollToService: ScrollToService,
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) {}

  ngOnInit() {
    this.registerIcons();
    this.scrollTo('#top');
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
