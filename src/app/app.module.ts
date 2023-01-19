import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SociaisComponent } from './components/sociais/sociais.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SociaisComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
