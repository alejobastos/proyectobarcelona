import { Component, OnInit } from '@angular/core';
import { jugador } from "../jugador";

@Component({
  selector: 'jugador-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  jugadorList:Array<jugador>;
  constructor() { }

  ngOnInit() {
    this.jugadorList = [
      {
      nombre:"jose",
      posicion:"volante",
      ciudad:"sultana",
      numero:9
      },
      
      {
        nombre:"manuel",
        posicion: "portero",
        ciudad:"sultana",
        numero:1
        },
      {
          nombre:"mari0",
          posicion: "lateral",
          ciudad:"sultana",
          numero:4
          },
      {
            nombre:"oscar",
            posicion: "delantero",
            ciudad:"sultana",
            numero:12
            },
    ];
  }

}