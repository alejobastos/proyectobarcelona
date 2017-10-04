import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, AddComponent]
})
export class DirectivoModule { }
