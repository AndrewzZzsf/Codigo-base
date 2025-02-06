import { Component } from '@angular/core';

import { Character } from './../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: 'app-main-page.html',
  standalone: false,
})

export class MainPageComponent{
  constructor(private dbzService:DbzService){}


   get characters() : Character[] {
    return this.dbzService.characters;
  }

  deleteCharacterById(id:string): void{
    this.dbzService.deleteById(id);
  }

  addNewCharacter(character: Character):void{
    this.dbzService.addNewCharacter(character);
  }




/*
todo lo que se use del servicio va a tener la misma instancia, por tanto
cualquier componente o modulo que utilice el servicio va a tener la misma informacion
que cualquier otro que lo use, puesto que se esta usando la misma instancia.
*/


}
