import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BandComponent } from './pages/band/band.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { FormComponent } from './pages/form/form.component';
import { DiscoComponent } from './pages/albums/disco/disco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaComponent } from './pages/media/media.component';

import { SearchPipe } from './pipes/search.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { IntegrantesComponent } from './pages/band/integrantes/integrantes.component';
import { FooterComponent } from './core/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BandComponent,
    AlbumsComponent,
    FormComponent,
    DiscoComponent,
    MediaComponent,
    SearchPipe,
    SafePipe,
    IntegrantesComponent,
    FooterComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppPipesModule { }
