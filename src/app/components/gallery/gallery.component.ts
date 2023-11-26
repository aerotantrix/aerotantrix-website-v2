import { Component } from '@angular/core';
import { Slide } from '../../shared/carousel/slide';
import { GalleryService } from 'src/app/shared/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images!: Slide[];

  constructor(private galleryService: GalleryService) {
    this.images = this.galleryService.getImages();
  }
}
