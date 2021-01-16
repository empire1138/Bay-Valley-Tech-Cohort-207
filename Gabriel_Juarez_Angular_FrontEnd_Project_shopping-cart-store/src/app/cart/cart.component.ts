import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

import { CartService } from '../cart.service';

import { products } from '../products';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  shipping;
  itemsTotal = 0;
  cartTotal = 0;
  shippingTotal = 0;

  constructor(private cartService: CartService) { }

  cartsTotal(): any {
    this.cartService.gettingUserTotal(this.itemsTotal, this.cartTotal);
    
  }

  ngOnInit(): any {
    this.items = this.cartService.getItems();

    this.shipping = this.cartService.getUserShippingChoice();
    

    this.items.forEach(items => {
      this.itemsTotal += items.price;
    });

    this.shipping.forEach(shipping => {
      this.shippingTotal += shipping.price;
    });

    this.cartTotal = this.shippingTotal + this.itemsTotal;
    
  }

 

}

