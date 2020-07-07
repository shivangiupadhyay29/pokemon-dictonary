import { Component, OnInit } from '@angular/core';
import { getProperty } from '../localstorage';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  list:object[];
  constructor() { }

  ngOnInit(): void {
    this.list = getProperty('product_list');
  }

}
