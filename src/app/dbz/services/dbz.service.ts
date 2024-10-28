import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";



@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[]=[
    {
      id: uuid(),
      name:'Juan',
      power: 12345
    },
    {
      id: uuid(),
      name: 'Pepe',
      power:98767
    },
    {
      id: uuid(),
      name: 'Fabiola',
      power:56423
    }
  ];

  addCharacter(character:Character):void{

    const newCharacter ={ id:uuid(), ...character }

    console.log(character);
    this.characters.push(newCharacter);

  }



  deleteCharacterById(id:string):void{
    console.log("numero de id: "+id);
    this.characters= this.characters.filter(c => c.id !== id);
  }


}
