import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SelectPokemonsComponent } from './components/select-pokemons/select-pokemons.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'login',    component: LoginComponent     },
      { path: 'register', component: RegisterComponent  },
      { path: 'select-pokemons', component: SelectPokemonsComponent  },
      { path: '**', redirectTo: 'register'  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
