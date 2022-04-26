import { Producer } from './producer.model';
import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Item } from './item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  producers: Producer[];
  items = [];

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.read();
  }

  read(){
    this.cardService.read().subscribe(producers => {
      this.producers = producers;
      console.log(producers);
      this.getItems(producers);
    });
  }

  getItems(producers){
    for(let prod of producers){
      this.items.push(prod.items);
    }
    console.log('items',this.items);

  }
}
