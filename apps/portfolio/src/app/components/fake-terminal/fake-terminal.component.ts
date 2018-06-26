import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-fake-terminal',
  template: `
    <div class="container">
      <div class="fakeMenu">
        <div class="fakeButtons fakeClose"></div>
        <div class="fakeButtons fakeMinimize"></div>
        <div class="fakeButtons fakeZoom"></div>
      </div>
      <div class="fakeScreen">
        <p class="line1">> I'm a self taught web developer with 3 years of experience building Angular, Ruby on Rails and Node.js applications.</p>
        <p class="line2">> I'm always looking for opportunities to learn and grow.</p>
        <p>> So if you've got an interesting project, <a [ngx-scroll-to]="'#contact'">contact me</a> and let's work together!</p>
      </div>
    </div>
  `,
  styleUrls: ['./fake-terminal.component.scss']
})
export class FakeTerminalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
