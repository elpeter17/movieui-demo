import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { MoviesModule } from './modules/movies/movies.module';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DirectorsModule } from './modules/directors/directors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutes,
    ComponentsModule,
    MoviesModule,
    DirectorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
