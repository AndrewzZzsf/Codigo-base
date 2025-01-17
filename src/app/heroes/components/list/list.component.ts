import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['pepe','pepa','rana']
  public deleted?:string;

  deleteLastHero(): void{
   this.deleted = this.heroNames.pop();
  }
}
