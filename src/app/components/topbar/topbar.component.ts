import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/shared/scroll.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ opacity: 0, display: 'none' })),
      state('visible', style({ opacity: 1, display: 'block' })),
      transition('hidden => visible', animate('300ms ease-in-out')),
      transition('visible => hidden', animate('300ms ease-in-out')),
    ]),
  ],
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  isAtTop: boolean = true;
  showSideNav: boolean = false;
  constructor() {}

  updateShowSideNav(): void {
    this.showSideNav = !this.showSideNav;
  }

  @HostListener('window:scroll', ['$event'])
  updateYPost(event: any) {
    if (window.scrollY === 0) {
      this.isAtTop = true;
    } else {
      this.isAtTop = false;
    }
  }

  ngOnInit(): void {}

  scrollTo(to: string, isMobile = false): void {
    if (to === 'home') {
      document.getElementById('home-outer-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else if (to === 'gallery') {
      // document.getElementById('gallery-container')?.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'nearest',
      // });
      const targetScrollTop =
        (document.getElementById('gallery-container')?.getBoundingClientRect()
          .top ?? 0) +
        window.scrollY -
        64;

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    } else if (to === 'sponsors') {
      // document.getElementById('sponsors-container')?.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'nearest',
      // });
      const targetScrollTop =
        (document.getElementById('sponsors-container')?.getBoundingClientRect()
          .top ?? 0) +
        window.scrollY -
        64;

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    } else if (to === 'team') {
      // document.getElementById('team-container')?.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'nearest',
      // });
      const targetScrollTop =
        (document.getElementById('team-container')?.getBoundingClientRect()
          .top ?? 0) +
        window.scrollY -
        64;

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    } else if (to === 'alumni') {
      // document.getElementById('alumni-container')?.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'nearest',
      // });
      const targetScrollTop =
        (document.getElementById('alumni-container')?.getBoundingClientRect()
          .top ?? 0) +
        window.scrollY -
        64;

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    } else if (to === 'contact') {
      // document.getElementById('contact-container')?.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'nearest',
      // });
      const targetScrollTop =
        (document.getElementById('contact-container')?.getBoundingClientRect()
          .top ?? 0) +
        window.scrollY -
        64;

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });
    }
    if (isMobile) {
      this.updateShowSideNav();
    }
  }
}
