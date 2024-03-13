import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userObj: UserModel[] = [];

  ngOnInit(): void {
  }
}
