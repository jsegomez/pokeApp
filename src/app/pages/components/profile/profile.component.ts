import { Component, OnInit } from '@angular/core';
import { DataUserService } from '../../../services/data-user.service';
import { DataUser } from 'src/app/interfaces/data-user';
import { Router } from '@angular/router';
import { Pokemon } from '../../../interfaces/data-pokemon';
import { PokemonsService } from '../../../services/pokemons.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: DataUserService,
    private pokeService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.getDataUser();
    this.getPokemons();
  }

  getDataUser(){
    this.dataUser = this.userService.getUser;
    if(!this.dataUser){
      this.router.navigate(['/auth'])
    }
  }

  getPokemons(){
    this.pokemons = this.pokeService.pokemons;
  }

  dataUser!: DataUser;
  pokemons: Pokemon[] = [];

}
