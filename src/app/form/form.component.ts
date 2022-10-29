import { Component, OnInit } from '@angular/core';
import { Product} from "../model/product";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
product!:Product;
  constructor() { }

  ngOnInit(): void {
    this.product = new Product()
  }

  save(): void{
    console.log(this.product);
  }
}
