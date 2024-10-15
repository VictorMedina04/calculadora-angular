import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent implements OnInit {






  ecuacion = '';
  ecuacion2 = '';

  addNum(arg0: string) {
    this.ecuacion += arg0;
  }

  operacion(simbolo: string) {
    if(simbolo === '+') {
      
     
    }

  }


  clean() {
    this.ecuacion = '';
    this.ecuacion2 = '';
  }
  ngOnInit(): void {
  }

}
