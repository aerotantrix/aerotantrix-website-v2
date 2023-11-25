import { HostListener, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollSubject = new Subject<boolean>();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // You can set a threshold value to determine when you consider the user to be at the top
    const threshold = 1;
    console.log(scrollPosition);
    this.scrollSubject.next(scrollPosition < threshold);
  }

  getScrollStatus(): Observable<boolean> {
    return this.scrollSubject.asObservable();
  }
}
