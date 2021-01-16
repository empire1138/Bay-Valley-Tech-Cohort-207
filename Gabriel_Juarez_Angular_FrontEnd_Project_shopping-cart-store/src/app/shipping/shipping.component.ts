import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import { Shipping } from '../model/shipping';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  shipping = [];

  shippingInfo: Shipping[] = [];



  constructor(private cartService: CartService) { }

  userShippingMethod(shipping): any {
    this.cartService.userShippingChoice(shipping);
    window.alert('Selected a Shipping Method');
    
  }



  ngOnInit(): any {
    this.cartService.getShippingInfoObj().subscribe((shippingData) => {
      this.shippingInfo = shippingData;
    });
    }

  }




