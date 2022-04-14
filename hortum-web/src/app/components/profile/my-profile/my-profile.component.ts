import { Item } from './../../card-item/item.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/views/login/login.service';
import { User } from 'src/app/views/login/user.model';
import { CardService } from '../../card-item/card.service';
// import { Item } from '../payments/payment.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user: User
  items: Item[]
  
  constructor(
    private loginService: LoginService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.getDataUser();
    this.getDataPayments();
  }

  getDataUser(): void {
    this.loginService.getAccount().subscribe(account => {
      this.user = account[0];
    });
  }
  
  getDataPayments(){
    this.cardService.read().subscribe(items => {
      this.items = items;
    });
  }

}
