import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServiceComponent } from './service/service.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UpperNavComponent,
    NavbarComponent,
    HeroSectionComponent,
    ServiceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}
