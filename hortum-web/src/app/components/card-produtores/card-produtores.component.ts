import { Component, OnInit } from '@angular/core';
import { CardService } from '../card-item/card.service';
import { Item } from '../card-item/item.model';
import { Producer } from '../card-item/producer.model';

@Component({
  selector: 'app-card-produtores',
  templateUrl: './card-produtores.component.html',
  styleUrls: ['./card-produtores.component.scss']
})
export class CardProdutoresComponent implements OnInit {
  producers: Producer[];
  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.read();
  }

  read(){
    this.cardService.read().subscribe(producers => {
      this.producers = producers;
      console.log(producers)
    });
  }
}
