import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  // dish1:IDishes ={} as IDishes;
  // id:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
