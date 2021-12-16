import { Component } from '@angular/core';

import { AppRoutes } from '@app-routes';
import { NavbarLink } from '@shared/models/navbar-link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  #links: NavbarLink[] = [
    {
      path: AppRoutes.home,
      linkText: 'accueil',
    },
    {
      path: AppRoutes.picturesByDayGallery,
      linkText: 'gallerie par jour',
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

  get copyRightsDeclaration(): string {
    return '2021 elon mars, all rights not reserved';
  }
}
