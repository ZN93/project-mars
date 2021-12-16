import { Component, Input, OnInit } from '@angular/core';

import { IMarsImagePhotoDto } from '@shared/models/mars-images-dto.model';

@Component({
  selector: 'app-thumbnail-item',
  templateUrl: './thumbnail-item.component.html',
  styleUrls: ['./thumbnail-item.component.scss'],
})
export class ThumbnailItemComponent implements OnInit {
  @Input() photo!: IMarsImagePhotoDto;

  constructor() {}

  ngOnInit(): void {
    console.log(this.photo.sol);
  }
}
