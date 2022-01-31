import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../interfaces/data-pokemon';
import { PokemonsService } from '../../../services/pokemons.service';
import { FullDataPokemon } from '../../../interfaces/full-data-pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  constructor(
    private pokeService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.getDetailsPokemon();
  }

  @Input() pokemon!: Pokemon;

  getDetailsPokemon(){
    this.pokeService.getDetailsPokemon(this.pokemon.url).subscribe(
      response => {
        this.pokemonDetails = response;
        console.log(response);
      }
    )
  }

  pokemonDetails!: FullDataPokemon;

}
