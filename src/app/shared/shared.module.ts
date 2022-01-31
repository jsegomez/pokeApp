import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MaterialModule } from '../material/material.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { TitlesComponent } from './components/titles/titles.component';


// Pipes
import { SafeUrlImagePipe } from './pipes/safe-url-image.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    SafeUrlImagePipe,
    TitlesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,    
    SafeUrlImagePipe,
    TitlesComponent
  ]
})
export class SharedModule { }
