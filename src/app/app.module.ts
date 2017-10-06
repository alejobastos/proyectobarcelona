import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JugadorModule } from './jugador/jugador.module';
import { AsistenteModule } from './asistente/asistente.module';
import { DirectivoModule } from './directivo/directivo.module';
import { EntrenadorModule } from './entrenador/entrenador.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
 MdAutocompleteModule,
 MdButtonModule,
 MdButtonToggleModule,
 MdCardModule,
 MdCheckboxModule,
 MdChipsModule,
 //MdCoreModule,
 MdDatepickerModule,
 MdDialogModule,
 MdExpansionModule,
 MdGridListModule,
 MdIconModule,
 MdInputModule,
 MdListModule,
 MdMenuModule,
 MdNativeDateModule,
 MdPaginatorModule,
 MdProgressBarModule,
 MdProgressSpinnerModule,
 MdRadioModule,
 MdRippleModule,
 MdSelectModule,
 MdSidenavModule,
 MdSliderModule,
 MdSlideToggleModule,
 MdSnackBarModule,
 MdSortModule,
 MdTableModule,
 MdTabsModule,
 MdToolbarModule,
 MdTooltipModule,
  
  } from
'@angular/material';
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
    BrowserAnimationsModule,
    JugadorModule,
    AsistenteModule,
    DirectivoModule,
    EntrenadorModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    //MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    RouterModule.forRoot(
      appRoutes
    )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
