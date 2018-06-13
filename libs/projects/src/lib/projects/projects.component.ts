import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-projects',
  template: `
    <div class="projects">
      <div *ngFor="let project of projects"
        class="project">
        <h3 class="name">
          <a href="{{project.link}}">
            {{ project.name }}
          </a>
        </h3>
        <div class="image-info"
          [ngClass]="{'reverse': project.flexDirection === 'row-reverse' }">
          <a class="image"
            [ngStyle]="{'background-image': 'url(/assets/images/projects/' + project.name + '.jpg'}"
            href="{{project.link}}">
          </a>
          <div class="info">
            <div class="description">{{ project.description }}</div>
            <div class="tags">
              <div class="tag" *ngFor="let tag of project.tags">{{ tag }}</div>
            </div>
          </div>
        </div>
      </div>
    
      <h3>FreeCodeCamp Projects</h3>
      <div class="fcc-projects"
        dragScroll
        [snap-disabled]="false"
        [scrollbar-hidden]="true"
        [drag-scroll-y-disabled]="true">
        <div *ngFor="let project of fccProjects"
          class="fcc-project"
          [ngStyle]="{'background-image': 'url(/assets/images/projects/' + project.name + '.jpg'}">
          <a class="overlay"
            href="{{ project.link }}">
            <div class="info">
              <div class="name">
                {{ project.name }}
                <a class="github"
                  href="{{ project.github }}">
                  <mat-icon svgIcon="github"></mat-icon>
                </a>
              </div>
              <div class="description">{{ project.description }}</div>
              <div class="tags">
                <div class="tag" *ngFor="let tag of project.tags">
                  {{ tag }}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'spotini',
      link: 'https://spotini.com',
      blogLink: 'https://spotini.com/guides',
      online: false,
      description:
        'Spotini helps people find events and new places near them. The blog is already online with tons of great articles focused on Warsaw, the website once online will work alongside the blog to provide a comprehensive guide to enjoying your time in the city.',
      github: null,
      tags: ['Angular 2+', 'Ruby on Rails', 'Postgresql', 'Heroku', 'Netlify'],
      flexDirection: 'row'
    },
    {
      name: 'hsethiopia',
      link: 'https://hsethiopia.herokuapp.com',
      online: true,
      description:
        'Import and export trade statistics aggregator. I created this site because the Ethiopian Revenue and Customs Authority only published data in excel form which made it difficult to gain insights into trade trends and find import substitution opportunities.',
      github: null,
      tags: ['Ruby on Rails', 'Postgresql', 'Heroku'],
      flexDirection: 'row-reverse'
    }
  ];
  fccProjects = [
    {
      name: 'calculator',
      link: 'https://calculator-mikias.herokuapp.com/',
      description: 'Super duper calculator for you math lovers!',
      online: true,
      github: 'https://github.com/mikeeus/calculator-js',
      tags: ['express.js', 'nodejs', 'bootstrap', 'scss', 'javascript']
    },
    {
      name: 'tictactoe',
      link: 'https://mikias-tactactoe.herokuapp.com/',
      description: 'The one and only, tic tac toe! Can you beat the computer?',
      online: true,
      github: 'https://github.com/mikeeus/tictactoe',
      tags: ['express.js', 'nodejs', 'bootstrap', 'scss', 'javascript']
    },
    {
      name: 'simon',
      link: 'https://simon-mikias.herokuapp.com/',
      description:
        'Simple simon game where you repeat the sequence given by the computer with strict mode for serious challengers.',
      online: true,
      github: 'https://github.com/mikeeus/simon',
      tags: ['express.js', 'nodejs', 'bootstrap', 'scss', 'javascript']
    },
    {
      name: 'pomodoro',
      link: 'https://pomodoro-mikias.herokuapp.com/',
      description:
        'Use this handy pomodoro clock to stay focused while maintaining a sustainable work schedule.',
      online: true,
      github: 'https://github.com/mikeeus/pomodoro',
      tags: ['express.js', 'nodejs', 'bootstrap', 'scss', 'javascript']
    },
    {
      name: 'weather',
      link: 'http://weather-mikias.herokuapp.com/',
      description:
        "Ever wonder what the weather is like outside? Me too. That's why I created this super unique weather app, just for people like us. I got you, bro.",
      online: true,
      github: 'https://github.com/mikeeus/weather-app',
      tags: [
        'express.js',
        'nodejs',
        'bootstrap',
        'scss',
        'javascript',
        'api calls'
      ]
    },
    {
      name: 'wiki',
      link: 'http://wiki-mikias.herokuapp.com/',
      description:
        'Too lazy to go to wikipedia? No problem. Just set this simple app as your homepage and you can search wikipedia quickly and easily!',
      online: true,
      github: 'https://github.com/mikeeus/wiki-app',
      tags: [
        'express.js',
        'nodejs',
        'bootstrap',
        'scss',
        'javascript',
        'api calls'
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
