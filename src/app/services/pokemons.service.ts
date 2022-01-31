import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataPokemon, Pokemon } from '../interfaces/data-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(
    private http: HttpClient
  ) { }

  private _urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=9';
  private _urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<DataPokemon>(this._urlBase).pipe(
      map((response: DataPokemon) => {
        const pokemons = response.results;
        pokemons.map(
          (pokemon, index) => pokemon.image = `${this._urlImage}/${index + 1}.png`
        );

        return pokemons;
      })
    );
  }
}
