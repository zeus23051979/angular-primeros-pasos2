import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteId : EventEmitter<string>= new EventEmitter();

  @Input()
  public characterList:Character[]=[
    {
      //valor por defecto
      name:'Armando',
      power:34326
  }
    ];

    onDeleteCharacter(id?: string):void{

      if(!id) return;

      console.log({id});

      this.onDeleteId.emit(id);
    }

}
