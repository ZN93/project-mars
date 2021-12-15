import { Component, HostListener } from '@angular/core';
import { AppRoutes } from '../../../app.routes';

export enum TailwindScreenSize {
  Sm = 640,
  Md = 768,
  Lg = 1024,
  Xl = 1280,
  DoubleXl = 1536,
}

export interface NavbarLink {
  path: string;
  linkText: string;
}

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

  @HostListener('window:resize')
  private onResize(): void {
    const width = window.innerWidth;
    if (width < TailwindScreenSize.Sm) {
      console.log('sm');
    } else if (width < TailwindScreenSize.Md) {
      console.log('md');
    } else if (width < TailwindScreenSize.Lg) {
      console.log('lg');
    } else if (width < TailwindScreenSize.Xl) {
      console.log('xl');
    } else if (width < TailwindScreenSize.DoubleXl) {
      console.log('2xl');
    } else {
      console.log('over 2xl');
    }
  }
}
