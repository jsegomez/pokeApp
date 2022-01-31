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

@NgModule({
  declarations: [
    HeaderComponent,    
    SafeUrlImagePipe,
    TitlesComponent,
    CardUserComponent
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
    CardUserComponent
  ]
})
export class SharedModule { }
