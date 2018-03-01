import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: []
})
export class AppModule { }
