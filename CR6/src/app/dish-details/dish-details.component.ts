import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  dish1:IDishes ={} as IDishes;
  id:number = 0

  constructor(private route: ActivatedRoute, private cartService:CartService) { }
  addToCart(){
    window.alert("Great choice!");
    this.cartService.addToCart(this.dish1)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['dishId'];
      this.dish1=dishes[this.id];
  });
}

}
