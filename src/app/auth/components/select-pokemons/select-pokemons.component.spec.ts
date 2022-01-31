import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPokemonsComponent } from './select-pokemons.component';

describe('SelectPokemonsComponent', () => {
  let component: SelectPokemonsComponent;
  let fixture: ComponentFixture<SelectPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
