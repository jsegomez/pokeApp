import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataPokemon, Pokemon } from '../interfaces/data-pokemon';
import { FullDataPokemon } from '../interfaces/full-data-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(
    private http: HttpClient
  ) { }

  private _urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=9';
  private _urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

  private _pokemonsSave: Pokemon[] = [
          {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      },
      {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
      },
      {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/4/",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      }
    
  ];

  get pokemons(){
    return this._pokemonsSave;
  }

  setPokemons(data: Pokemon[]){
    this._pokemonsSave = data;
  }

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

  getDetailsPokemon(url: string): Observable<FullDataPokemon>{
    return this.http.get<FullDataPokemon>(url).pipe()
  }
}
