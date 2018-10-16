import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routes//
import { app_routing } from './app.routes';
// Services//
import {MusiciansService} from './services/mucisians.services';
// Components//
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MusiciansComponent } from './components/musicians/musicians.component';
import { MusicianComponent } from './components/musician/musician.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { MusicianCardComponent } from './components/musician-card/musician-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MusiciansComponent,
    MusicianComponent,
    FooterComponent,
    SearchComponent,
    MusicianCardComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [MusiciansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
