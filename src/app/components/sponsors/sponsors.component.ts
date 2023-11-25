import { SponsorsService } from './../../shared/sponsors.service';
import { Component } from '@angular/core';
import { Sponsors } from 'src/app/shared/models/sponsors';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent {
  sponsors!: Sponsors[];

  constructor(private sponsorsService: SponsorsService) {
    this.sponsors = this.sponsorsService.getSponsors();
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
