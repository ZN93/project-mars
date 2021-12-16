import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { AppRoutes } from '@app-routes';
import { ResizeService } from '@shared/services/resize.service';
import { NavbarLink } from '@shared/models/navbar-link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('menuToggler') menuToggler?: ElementRef<HTMLButtonElement>;

  #showSmLinksMenu = false;
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

  get homeLink(): NavbarLink {
    return this.#links[0]!;
  }

  get showSmLinksMenu(): boolean {
    return (this.isSm || this.isMd) && this.#showSmLinksMenu;
  }

  get logoImgSrc(): string {
    const { isSm, isMd } = this.resizeService.twBreakpoints;

    const reduceLogo = isSm || isMd;

    return reduceLogo
      ? 'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
      : 'https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg';
  }

  get isSm(): boolean {
    return this.resizeService.twBreakpoints.isSm;
  }

  get isMd(): boolean {
    return this.resizeService.twBreakpoints.isMd;
  }

  constructor(
    private renderer: Renderer2,
    private resizeService: ResizeService,
  ) {
    this.resizeService.updateBreakPoints();
  }

  ngAfterViewInit(): void {
    if (this.menuToggler) {
      const { children } = this.menuToggler.nativeElement;

      for (let i = 0; i < children.length; i++)
        this.renderer.setStyle(children[i], 'pointer-events', 'none');
    }
  }

  @HostListener('document:click', ['$event'])
  closeLinksMenuOnClick(event: PointerEvent): void {
    if (this.menuToggler) {
      const targetIsToggler =
        this.menuToggler.nativeElement !== event.target;

      if (targetIsToggler) this.#showSmLinksMenu = false;
    }
  }

  toggleBurgerMenu(): void {
    this.#showSmLinksMenu = !this.#showSmLinksMenu;
  }
}
