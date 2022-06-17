import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:IDishes[]=[];
  sum:number=0;

  constructor() { }
  addToCart(product:IDishes){
    this.items.push(product);
    this.sum+=Number(product.price)

  }
  getItems(){
    return this.items
  }
  clearCart(){
    this.items=[];
    return this.items
  }
  getTotal(){
    return this.sum
  }
  
}
