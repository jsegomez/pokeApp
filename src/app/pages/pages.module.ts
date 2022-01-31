import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MainComponent,    
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PagesModule { }
