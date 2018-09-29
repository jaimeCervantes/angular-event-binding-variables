import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = "Ambito de variables para expresiones de estado";
  resultado: number = 0;
  gente: Array<any>;
  
  constructor() {
    this.initGente();
  }
  
  initGente () {
    this.gente = [{
        nombre: 'Jaime',
        edad: 30,
      },
      {
       nombre: 'Guadalupe' ,
       edad: 25
      },
      {
        nombre: 'Jacobo',
        edad: 35
      },
      {
        nombre: 'Ruben',
        edad: 31
      }
    ];
  }
  
  eliminar (nombre, e) {
    let index = this.gente.findIndex(p => p.nombre === nombre);
    this.gente.splice(index, 1);
    alert(e.type);
  }
}
