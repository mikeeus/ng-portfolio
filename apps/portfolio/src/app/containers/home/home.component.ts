import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'portfolio-home',
  template: `
    <div class="container">
      <div id="top"></div>
      <portfolio-header
        [navLinks]="navLinks"
        (selectLink)="scrollTo($event)">
      </portfolio-header>
  
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
      </div>

      <footer>
        <div>Designed and built with love by Mikias Abera</div>
        <div class="social">
          <a href="https://www.linkedin.com/in/mikeeus">linkedin</a>
          <a href="https://www.github.com/mikeeus">Github</a>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  scrollTo(target) {
    this.scrollToService.scrollTo({ target: target, offset: -64 })
  }
}
