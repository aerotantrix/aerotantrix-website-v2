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
        text: 'Orientation program on basics aeromodelling',
      },
      {
        url: 'assets/images/gallery/xflr5.png',
        text: 'Analysis of wing on XFLR5',
      },
      {
        url: 'assets/images/gallery/cadmodel.png',
        text: 'CAD Model of the plane',
      },
      {
        url: 'assets/images/gallery/skeletal.png',
        text: 'Skeletal Structure of Aircraft before applying monokote',
      },
      {
        url: 'assets/images/gallery/finalplane.png',
        text: 'Ready to Fly',
      },
    ];
  }
}
