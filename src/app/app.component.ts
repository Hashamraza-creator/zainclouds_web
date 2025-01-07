import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UpperNavComponent,
    NavbarComponent,
    HeroSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ZainClouds';

  slides = [
    {
      url: 'https://via.placeholder.com/1920x1080?text=Mobile+Development',
      title: 'Web Development',
      description: 'Build scalable and responsive web applications',
    },
    {
      url: 'https://via.placeholder.com/1920x1080?text=Mobile+Development',
      title: 'Mobile Development',
      description: 'Create seamless mobile app experiences',
    },
    {
      url: 'https://via.placeholder.com/1920x1080?text=Cloud+Services',
      title: 'AWS Cloud Services',
      description: 'Leverage AWS for powerful cloud solutions',
    },
  ];
}
