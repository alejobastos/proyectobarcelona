import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JugadorModule } from './jugador/jugador.module';
import { AsistenteModule } from './asistente/asistente.module';
import { DirectivoModule } from './directivo/directivo.module';
import { EntrenadorModule } from './entrenador/entrenador.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './jugador/index/index.component';
import { AddComponent as EntrenadorAddComponent } from './entrenador/add/add.component';

const appRoutes: Routes = [
{path: 'jugador/index', component: IndexComponent},
{path: 'entrenador/add',component: EntrenadorAddComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    JugadorModule,
    AsistenteModule,
    DirectivoModule,
    EntrenadorModule,
    RouterModule.forRoot(
      appRoutes
    )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
