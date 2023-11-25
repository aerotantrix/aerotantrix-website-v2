import { Injectable } from '@angular/core';
import { Sponsors } from './models/sponsors';

@Injectable({
  providedIn: 'root',
})
export class SponsorsService {
  constructor() {}

  getSponsors(): Sponsors[] {
    return [
      new Sponsors(
        'assets/images/sponsors/rangsons-aerospace.png',
        'Rangsons Aerospace',
        "India's leading product technology company in defense, aerospace, and homeland security.",
        'https://rangsonsaerospace.com'
      ),
    ];
  }
}
