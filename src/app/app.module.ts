import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HorseListComponent } from './horse-list/horse-list.component';
import { BreedPipe } from './breed.pipe';
import { GenderPipe } from './gender.pipe';
import { ColorPipe } from './color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HorseListComponent,
    BreedPipe,
    GenderPipe,
    ColorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
