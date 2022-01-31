import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHobbyService {
  private _dataHobbies: string[] = [
    'Jugar Fútbol',
    'Jugar Basquetball',
    'Jugar Tenis',
    'Jugar Voleibol',
    'Jugar Fifa',
    'Jugar Videojuegos',
  ];  

  get getUser(): string[] {
    return this._dataHobbies;
  }  
}
