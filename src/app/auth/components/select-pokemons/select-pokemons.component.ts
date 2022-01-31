import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataUser } from 'src/app/interfaces/data-user';
import { DataUserService } from '../../../services/data-user.service';
import { PokemonsService } from '../../../services/pokemons.service';
import { Pokemon } from '../../../interfaces/data-pokemon';
import { Form, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-pokemons',
  templateUrl: './select-pokemons.component.html',
  styleUrls: ['./select-pokemons.component.css']
})
export class SelectPokemonsComponent implements OnInit {

  constructor(    
    private router: Router,    
    private pokeService: PokemonsService,
    private dataUserService: DataUserService,    
  ) { }

  ngOnInit(): void {
    this.getDataUser();
    this.getPokemons();
  }

  getDataUser(){
    this.dataUser = this.dataUserService.getUser;
    if(!this.dataUser){
      this.router.navigate(['/auth']);
    }
  }

  getPokemons(){
    this.pokeService.getPokemons().subscribe(
      response => this.pokemons = response
    )
  }

  dataUser!: DataUser;
  pokemons: Pokemon[] = [];
  pokeToSave: Pokemon[] = [];
  disabledCheck: boolean = false;
  isLoading: boolean = false;

  addPokemon(pokemon: Pokemon, index: number){
    if(!this.pokeToSave.includes(pokemon)){
      this.pokeToSave.push(pokemon);      
      console.log(this.pokeToSave)
    }else{
      this.pokeToSave = this.pokeToSave.filter(item => item.name != pokemon.name);
      console.log(this.pokeToSave)
    }

    if(this.pokeToSave.length >= 3) this.disabledCheck = true;
  }

  save(){
    this.isLoading = true;
    console.log(this.pokeToSave)
    this.pokeService.setPokemons(this.pokeToSave);

    setTimeout(() => {
      this.router.navigate(['/pages']);
    }, 1200);
  }
}
