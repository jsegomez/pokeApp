import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DataUserService } from '../../../services/data-user.service';
import { DataUser } from '../../../interfaces/data-user';
import { DataHobbyService } from '../../../services/data-hobby.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataHobby: DataHobbyService,
    private dataUserService: DataUserService,    
  ) { }

  ngOnInit(): void {
    this.changeHobby();
  }
  
  @ViewChild('imageProfile') imageProfile!: ElementRef;  
  image: string = '';
  age!: number;
  placeholder: string = 'Adjuntar una foto';
  filteredOptions!: Observable<string[]>;
  options: string[] = this.dataHobby.getUser;
  isLoading: boolean = false;

  public formRegister = this.formBuilder.group({
    name    : ['', [Validators.required]],
    hobby   : [''],
    birthday: ['', Validators.required],
    document: ['', [Validators.required]],
  });

  activeValidationDocument(age: number){
    if(age >= 18){
      this.formRegister.get('document')?.setValidators([Validators.required])
    }else{
      this.formRegister.get('document')?.clearValidators();
    }
    this.formRegister.get('document')?.updateValueAndValidity();
  }

  // ====================== Funtions input hobby ======================
  changeHobby(){
    this.filteredOptions = this.formRegister.controls['hobby'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  // ==================================================================
  // ====================== Functions input image =====================
  loadImage(){
    const file = this.imageProfile.nativeElement.files[0];
    if(file){
      this.image = URL.createObjectURL(file);      
      this.placeholder = file.name;
    }
  }

  deleteImage(){
    this.image = '';
    this.placeholder = 'Adjuntar una foto';
  }
  // ==================================================================
  calculateAge(){
    const today = new Date();
    const birthday = new Date(this.formRegister.get('birthday')?.value);
    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    this.age = age;
    this.activeValidationDocument(age);
  }

  saveData(){
    if(this.formRegister.invalid && !this.image) return;    
    const { name, hobby, document } = this.formRegister.value;
    const user: DataUser = {
      name, hobby, age: this.age, document, image: this.image
    }
    
    this.dataUserService.setUser(user);
    this.isLoading = true;

    setTimeout(() => {      
      this.router.navigate(['/auth/select-pokemons']);    
    }, 1500);
  }
}