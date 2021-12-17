import { Component, Input } from '@angular/core';
import { IMarsImagePhotoDto } from '@shared/models/mars-images-dto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() photos: IMarsImagePhotoDto[] = [];
  @Input() emptyMessage = "Aucune photo n'a été trouvé pour cette date.";

  get isEmpty(): boolean {
    return this.photos.length <= 0;
  }

  ngOnInit(): void {}
}
