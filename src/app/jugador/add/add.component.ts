import { Component, OnInit } from '@angular/core';
import {jugador} from "../jugador";
@Component({
  selector: 'jugador-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  jugador: jugador;
  
  constructor() { }

  ngOnInit() {
    this.jugador = new jugador();
  }

}
