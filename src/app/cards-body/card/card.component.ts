import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product:Product;
  @Input() prodClicked:string;
  @Input() showProd:Product;
  @Output() prodToLoadDesc = new EventEmitter<Product>();
  constructor() { }

  /* emit data to parent component when clicking the product div (clickeble)*/
  clickDiv(produc) {
    console.log("click div");
    console.log(produc);
    this.prodToLoadDesc.emit(produc);
  }
  ngOnInit() {
  }

}
