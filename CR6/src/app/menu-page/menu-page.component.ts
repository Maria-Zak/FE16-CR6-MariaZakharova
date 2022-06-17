import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  dishes:IDishes[]=dishes;

  constructor(private cartService:CartService) { }

  addToCart(index:number){
    window.alert("Great choice!");
    this.cartService.addToCart(this.dishes[index])
  }

  ngOnInit(): void { }

}