import { Injectable } from '@angular/core';
import { Slide } from './carousel/slide';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor() {}

  getImages(): Slide[] {
    return [
      {
        url: 'assets/images/gallery/orientation.png',
        text: 'Orientation program on the basics of aeromodelling',
      },
      {
        url: 'assets/images/gallery/xflr5.png',
        text: 'Analysis of wing on XFLR5',
      },
      {
        url: 'assets/images/gallery/cadmodel.png',
        text: 'CAD Model of our plane, 2022',
      },
      {
        url: 'assets/images/gallery/plane23.png',
        text: 'CAD Model of our plane, 2023',
      },
      {
        url: 'assets/images/gallery/cansatcad.png',
        text: 'CAD Model of CANSAT 2023',
      },
      {
        url: 'assets/images/gallery/cansat.png',
        text: 'CANSAT 2023, ready for liftoff',
      },
      {
        url: 'assets/images/gallery/skeletal.png',
        text: 'Skeletal Structure of Aircraft before applying monokote',
      },
      {
        url: 'assets/images/gallery/finalplane.png',
        text: 'Ready to Fly',
      },
      {
        url: 'assets/images/gallery/hexacopter.png',
        text: 'Hexacopter 2023',
      },
    ];
  }
}
