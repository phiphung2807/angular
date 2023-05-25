import { Component } from '@angular/core';
import { IProduct } from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: IProduct[] = [
    { id: 1, name: 'San pham A', price: 100, img: 'img' },
    { id: 2, name: 'San pham B', price: 200, img: 'img' },
    { id: 3, name: 'San pham C', price: 100, img: 'img' },
    { id: 4, name: 'San pham D', price: 200, img: 'img' },
    { id: 5, name: 'San pham E', price: 100, img: 'img' },
    { id: 6, name: 'San pham F', price: 200, img: 'img' },
    { id: 7, name: 'San pham G', price: 200, img: 'img' },
  ];

  onHandleRemove(id: any) {
    this.products = this.products.filter((item) => item.id !== id);
  }
}
