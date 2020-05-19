import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './components/genre/genre.component';
import { MovieComponent } from './components/movie/movie.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { ShowComponent } from './components/show/show.component';


@NgModule({
  declarations: [ // Components, directives , pipes
    AppComponent,
    GenreComponent,
    MovieComponent,
    AdminMovieComponent,
    ShowComponent
  ],
  imports: [ // Module
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [], // eksterne ting, service
  bootstrap: [AppComponent]
})
export class AppModule { }
