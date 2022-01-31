import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MaterialModule } from '../material/material.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { TitlesComponent } from './components/titles/titles.component';
import { CardUserComponent } from './components/card-user/card-user.component';

// Pipes
import { SafeUrlImagePipe } from './pipes/safe-url-image.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';

@NgModule({
  declarations: [
    HeaderComponent,    
    SafeUrlImagePipe,
    TitlesComponent,
    CardUserComponent,
    LoadingComponent,
    CardPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [    
    HeaderComponent,    
    SafeUrlImagePipe,
    TitlesComponent,
    CardUserComponent,
    LoadingComponent,
    CardPokemonComponent
  ]
})
export class SharedModule { }
