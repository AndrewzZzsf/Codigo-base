import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Que onda';
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


