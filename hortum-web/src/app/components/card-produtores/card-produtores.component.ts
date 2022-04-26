import { Component, OnInit } from '@angular/core';
import { CardService } from '../card-item/card.service';
import { Item } from '../card-item/item.model';

@Component({
  selector: 'app-card-produtores',
  templateUrl: './card-produtores.component.html',
  styleUrls: ['./card-produtores.component.scss']
})
export class CardProdutoresComponent implements OnInit {
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
