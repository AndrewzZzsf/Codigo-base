import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule //se importa commonModuke ya que aqui dentro esta el ng if y el ng for, por
                 //defecto esta en el app.module, sin embargo al encapsular los modulos se tendria que
                 // importar en el modulo encapsulado
  ]

})
export class heroesModule{ }
