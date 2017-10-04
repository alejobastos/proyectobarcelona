import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JugadorModule } from './jugador/jugador.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JugadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
