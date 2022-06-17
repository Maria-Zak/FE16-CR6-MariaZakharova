import { Component, OnInit } from '@angular/core';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  dishes:IDishes[]=dishes;

  constructor() { }

  ngOnInit(): void {
  }

}
