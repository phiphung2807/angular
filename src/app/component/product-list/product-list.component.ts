import { Component, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // @Input() products! : IProduct[];
  // @Output() onRemove = new EventEmitter<any>();
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
  removeItem(id: any) {
    // xoa API
    this.productService.deleteProduct(id).subscribe(() => {
      // reRender
      this.products = this.products.filter(item => item.id !== id)
    })
    // this.onRemove.emit(id);
  }
}

// ProductList.js

// function ProductList({ products, onRemove }){
//   return <div>
//     <button onClick={() => onRemove(id)}></button>
//   </div>
// }

// App.js
// <ProductList products={state} onRemove={onHandleRemove}/>





// function ProductList({products, onRemove}){
//   return (
//     <div>
//       {products.map(item => {
//         return <button onClick={() => onRemove(item.id)}></button>
//       })}
//     </div>
//   )
// }
