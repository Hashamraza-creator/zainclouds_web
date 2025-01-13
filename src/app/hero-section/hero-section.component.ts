import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        query(
          'span',
          [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            stagger(500, [
              animate(
                '1s cubic-bezier(0.25, 0.8, 0.25, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HeroSectionComponent {}
