import { Component, Input, OnInit } from '@angular/core';
import { DataUser } from '../../../interfaces/data-user';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() dataUser!: DataUser;
}
