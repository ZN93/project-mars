import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PicturesByDayGalleryComponent } from './pages/pictures-by-day-gallery/pictures-by-day-gallery.component';
import { UserPicturesGalleryComponent } from './pages/user-pictures-gallery/user-pictures-gallery.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PicturesByDayGalleryComponent,
    UserPicturesGalleryComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
