import { Injectable } from '@angular/core';
import { DataUser } from '../interfaces/data-user';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {
  private _dataUser!: DataUser;

  get getUser(): DataUser {
    return this._dataUser;
  }

  setUser(data: DataUser){
    this._dataUser = data;
  }
}
