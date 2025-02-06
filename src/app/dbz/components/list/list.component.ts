import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})

export class ListComponent {

  @Input()
  public CharacterList: Character[]=[
    {
      name:'roca', //por defecto si no hay nada en la lista
      power:10,
    }
  ]

  @Output()
  public onDeleteCharacter:EventEmitter<string> = new EventEmitter();

  deleteCharacter(id:string){
    this.onDeleteCharacter.emit(id);
  }

 }
