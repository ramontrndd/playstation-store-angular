import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input()
  gamePrice:string = "R$199,90"
  @Input()
  gameType:string = "Digital PS4"

  constructor() { }

  ngOnInit(): void {
  }

}
