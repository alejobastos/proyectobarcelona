import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JugadorModule } from './jugador/jugador.module';
import { AsistenteModule } from './asistente/asistente.module';
import { DirectivoModule } from './directivo/directivo.module';
import { EntrenadorModule } from './entrenador/entrenador.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JugadorModule,
    AsistenteModule,
    DirectivoModule,
    EntrenadorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
