import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[] = [];

  index = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.index === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.index - 1;

    this.resetTimer();
    this.index = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.index === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.index + 1;

    this.resetTimer();
    this.index = newIndex;
  }

  goToSlide(index: number) {
    this.index = index;
  }

  getCurrentSlideUrl(): string {
    return `url(${this.slides[this.index].url})`;
  }

  getCurrentSlideText(): string {
    return this.slides[this.index].text;
  }

  getParsedUrl(url: string): string {
    return `url(${url})`;
  }
}
