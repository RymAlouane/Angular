import { Component, OnInit } from '@angular/core';
import { Product} from "../model/product";
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
contenu="Le contenu de la page d'accueil";
  listProduct!:Product[];
  public buy(i: number){
    this.listProduct[i].quantity =
      this.listProduct[i].quantity - 1 }



  maxPrice!:number;
  constructor() { }

  ngOnInit(): void {
    this.listProduct=[
      {id: '1', title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: '2', title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: '3', title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }

}
