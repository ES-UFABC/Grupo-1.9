import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdutoresComponent } from './card-produtores.component';

describe('CardProdutoresComponent', () => {
  let component: CardProdutoresComponent;
  let fixture: ComponentFixture<CardProdutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProdutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProdutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
