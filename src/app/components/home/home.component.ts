import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  crop = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 700) {
      this.crop = true;
    } else {
      this.crop = false;
    }
  }
}
