import { Component } from '@angular/core';

import { AppRoutes } from '@app-routes';
import { ResizeService } from '@shared/services/resize.service';
import { NavbarLink } from '@shared/models/navbar-link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  #links: NavbarLink[] = [
    {
      path: AppRoutes.home,
      linkText: 'accueil',
    },
    {
      path: AppRoutes.picturesByDayGallery,
      linkText: 'gallery par jour',
    },
    {
      path: AppRoutes.userPicturesGallery,
      linkText: 'ma gallerie',
    },
    {
      path: AppRoutes.contact,
      linkText: 'contact',
    },
  ];

  get links(): NavbarLink[] {
    return this.#links;
  }

  get homeLink(): NavbarLink {
    return this.#links[0];
  }

  get logoImgSrc(): string {
    const { isLg, isXl, is2Xl, isOver2Xl } =
      this.resizeService.twBreakpoints;

    return isLg || isXl || is2Xl || isOver2Xl
      ? 'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
      : 'https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg';
  }

  constructor(private resizeService: ResizeService) {}
}
