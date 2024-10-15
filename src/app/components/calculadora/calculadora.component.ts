import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent implements OnInit {
  

  operacion = '';

  addNum(arg0: number) {
    this.operacion += arg0;
  }
  



  clean() {
    this.operacion = '';
  }
  ngOnInit(): void {
  }

}
