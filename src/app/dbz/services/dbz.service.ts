import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[]=[
    {
      id: uuid(),
      name:'pepe',
      power:100
    },
    {
      id: uuid(),
      name:'rana',
      power:10000
    },
    {
      id:uuid(),
      name:'pepa',
      power:200
    }
  ];

  public addNewCharacter(character:Character):void{

    const newCharacter: Character = {id:uuid() , ...character} // los ... hacen que se pongan todos los atributos que ya tenia character
                                                               // y definimos que va a tener un id, o sea se va a agregar el id y se
                                                               //mantendran los atributos que ya tenia

    console.log(newCharacter);
    this.characters.push(newCharacter);
  }

  public deleteById(id:string):void{
    this.characters=this.characters.filter(character => character.id !== id)
  }


}
