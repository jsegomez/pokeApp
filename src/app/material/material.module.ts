import { NgModule } from '@angular/core';

// Modules
import { MatInputModule } from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateModule } from '@angular/material/core';


@NgModule({
  exports: [
    MatInputModule,
    ScrollingModule,
    MatButtonModule,
    MatToolbarModule,
    NativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatAutocompleteModule,    
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-SV',
    },
  ],
})
export class MaterialModule { }
