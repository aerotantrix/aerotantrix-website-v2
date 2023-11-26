import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
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
      document.getElementById('contact-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
