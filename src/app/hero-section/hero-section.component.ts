import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
@Input() slides: any[] = [];
@Input() autoPlay = false;
@Input() autoPlaySpeed=1000;
currentSlide = 0;






next(){
  this.currentSlide = (this.currentSlide + 1) % this.slides.length;
}

previous(){
  this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
}
goToSlide(index: number): void {
  this.currentSlide = index;
}

constructor(){
  if(this.autoPlay) {
    setInterval(() => {
      this.next();

    },  this.autoPlaySpeed);
  }
}
}
