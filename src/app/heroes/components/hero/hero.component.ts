import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
   public name: string = 'rana'
   public edad: number =  10
   get xdMethod():string{  //los gets se ven como una propiedad, y se pueden usar como tal
    return 'xd';
   }
  heroDescription():string{
  return `${this.name} - ${this.edad}`;
   }

   changeHero():void{
    this.name='Spiderman';
   }
   changeAge():void{
    this.edad=25;
   }

   resetForm():void{
    this.name='rana';
    this.edad=10;
   }
}
