import { Component, OnInit } from '@angular/core';

import { IMarsImagePhotoDto } from '@shared/models/mars-images-dto.model';

import { MarsImagesService } from '../mars-images.service';

@Component({
  selector: 'app-today-pictures-gallery',
  templateUrl: './pictures-by-day-gallery.component.html',
  styleUrls: ['./pictures-by-day-gallery.component.scss'],
})
export class PicturesByDayGalleryComponent implements OnInit {
  readonly today = new Date();
  selectedDate: Date | null = null;
  photos: IMarsImagePhotoDto[] = [];

  constructor(private readonly marsImagesService: MarsImagesService) {}

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    if (!this.selectedDate) this.selectedDate = this.today;
    const earthDate = this.marsImagesService.dateToApiFormatString(
      this.selectedDate,
    );
    this.marsImagesService
      .getImages({ page: 0, earthDate })
      .subscribe(({ body }) => {
        if (body) this.photos = body.photos;
        else console.error('body null');
      });
  }
}
