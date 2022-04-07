import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Item } from './item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  items: Item[]

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.read();
  }

  read(){
    this.cardService.read().subscribe(items => {
      this.items = items;
      console.log(items)
    });
  }
}
