import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PicturesByDayGalleryComponent } from './pages/pictures-by-day-gallery/pictures-by-day-gallery.component';
import { UserPicturesGalleryComponent } from './pages/user-pictures-gallery/user-pictures-gallery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pictures-by-day-gallery',
    component: PicturesByDayGalleryComponent,
  },
  {
    path: 'user-pictures-gallery',
    component: UserPicturesGalleryComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
