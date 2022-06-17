import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes } from '../IDishes';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  info = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),

  });
   onSubmit(){
     if(this.info.valid){
    let a:any = this.info.value;
    console.log(a)
   }
  }

  items:IDishes[]=[];
  priceTotal:number =0;
  service:number=0;
  discount:number=0;
  priceFinal:number=0

  
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.items=this.cartService.getItems()
    this.priceTotal=this.cartService.getTotal()
    this.service=this.cartService.getTotal()*(0.10)
    this.discount=this.cartService.getTotal()*0.15
    this.priceFinal=this.priceTotal+this.service-this.discount
  }

}
