import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PicturesByDayGalleryComponent } from './pages/pictures-by-day-gallery/pictures-by-day-gallery.component';
import { UserPicturesGalleryComponent } from './pages/user-pictures-gallery/user-pictures-gallery.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.home,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.home,
    component: HomeComponent,
  },
  {
    path: AppRoutes.picturesByDayGallery,
    component: PicturesByDayGalleryComponent,
  },
  {
    path: AppRoutes.userPicturesGallery,
    component: UserPicturesGalleryComponent,
  },
  {
    path: AppRoutes.contact,
    component: ContactComponent,
  },
  {
    path: AppRoutes.unknownRoutes,
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
