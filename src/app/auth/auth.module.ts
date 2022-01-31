import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectPokemonsComponent } from './components/select-pokemons/select-pokemons.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,    
    RegisterComponent,
    SelectPokemonsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class AuthModule { }
