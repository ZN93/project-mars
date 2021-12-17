import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { IMarsImagePhotoDto } from '@shared/models/mars-images-dto.model';

@Component({
  selector: 'app-thumbnail-item',
  templateUrl: './thumbnail-item.component.html',
  styleUrls: ['./thumbnail-item.component.scss'],
})
export class ThumbnailItemComponent {
  @Input() photo!: IMarsImagePhotoDto;
  saveIcon = faHeart;

  get takenBy(): string {
    return `by ${this.photo.rover.name} with ${this.photo.camera.name} camera`;
  }

  get takenAt(): string {
    return `at ${this.photo.earth_date} (${this.photo.sol} sols)`;
  }

  savePhoto(): void {
    console.log('saved ' + this.photo.id);
  }
}
