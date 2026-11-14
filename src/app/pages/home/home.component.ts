import { Component } from '@angular/core';

import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly products = PRODUCTS;
}
