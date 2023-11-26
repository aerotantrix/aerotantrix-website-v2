import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/shared/scroll.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  isAtTop: boolean = true;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  updateYPost(event: any) {
    if (window.scrollY === 0) {
      this.isAtTop = true;
    } else {
      this.isAtTop = false;
    }
  }

  ngOnInit(): void {}

  scrollTo(to: string): void {
    if (to === 'home') {
      document.getElementById('home-outer-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else if (to === 'gallery') {
      document.getElementById('gallery-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else if (to === 'sponsors') {
      document.getElementById('sponsors-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else if (to === 'team') {
      document.getElementById('team-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else if (to === 'alumni') {
      document.getElementById('alumni-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } else if (to === 'contact') {
      document.getElementById('contact-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
