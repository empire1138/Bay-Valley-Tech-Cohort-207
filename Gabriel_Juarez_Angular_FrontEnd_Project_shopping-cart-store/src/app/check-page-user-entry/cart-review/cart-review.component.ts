import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-review',
  templateUrl: './cart-review.component.html',
  styleUrls: ['./cart-review.component.css']
})
export class CartReviewComponent implements OnInit {
  
  

  constructor(private cartService: CartService) { }

  itemsTotal;
  cartsTotal;
  items;
  shipping;

  ngOnInit(  ): any {

    this.itemsTotal = this.cartService.returnItemTotal();
    
    this.cartsTotal = this.cartService.returnCartTotal();
    this.items = this.cartService.getItems();
    this.shipping = this.cartService.getUserShippingChoice();

    
  }
}
