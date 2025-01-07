import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {}
