import { NgModule } from '@angular/core';

// Modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateModule } from '@angular/material/core';


@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    NativeDateModule,
    MatDatepickerModule,
    MatNativeDateModule,
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
