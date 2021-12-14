import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TodayPicturesGalleryComponent } from './pages/today-pictures-gallery/today-pictures-gallery.component';
import { UserPicturesGalleryComponent } from './pages/user-pictures-gallery/user-pictures-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    TodayPicturesGalleryComponent,
    UserPicturesGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
