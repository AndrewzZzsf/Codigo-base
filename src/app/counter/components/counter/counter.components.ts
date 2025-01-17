import {Component} from '@angular/core'
//con "a- component" se puede crear todo el componente en una sola linea
@Component({
  selector: 'app-counter', //las "``" hacen que se pueda usar varias lineas para definir codigo, en caso de que sean pocas lineas,
                          // en vez de traer todo un html para 5 lineas
  template: `
  <h1>Counter: {{counter}}</h1>
  <input (click)="addNumber()" type="button" value="+1"> <!--los parentesis definen la accion que hace el boton que estara relacionada al metodo-->
  <input (click)="reset()" type="reset" value="Reset">
  <input (click)="subNumber()"  type="button" value="-1">
  `,//aqui se deberia poner la referencia a un html, pero se puede poner codigo directamente de html
  standalone: false,
})

export class CounterComponent{
  public counter: number = 0;
  public addNumber(a:number=1):void{
    this.counter+=a;
  }
  public subNumber(a:number=1):void{
    this.counter-=a;
  }

  public reset():void{
    this.counter=0;
  }
}

