import { Component } from '@angular/core';
import { IMarsImagePhotoDto } from '@shared/models/mars-images-dto.model';
import { MarsImagesService } from '@pages/mars-images.service';

@Component({
  selector: 'app-user-pictures-gallery',
  templateUrl: './user-pictures-gallery.component.html',
  styleUrls: ['./user-pictures-gallery.component.scss'],
})
export class UserPicturesGalleryComponent {
  readonly today = new Date();
  selectedDate = this.today;
  photos: IMarsImagePhotoDto[] = [];

  constructor(private readonly marsImagesService: MarsImagesService) {}

  ngOnInit(): void {
    this.fetchPhotosPerPage();
  }

  fetchPhotosPerPage(page = 1): void {
    // formatted `selectedDate` for api param
    const earthDate = this.marsImagesService.dateToStringInApiFormat(
      this.selectedDate,
    );

    this.marsImagesService
      .getImages({ page, earthDate })
      .subscribe(({ body }) => {
        if (body) this.photos = body.photos;
        else console.error('body null');
      });
  }
}
