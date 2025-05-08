import { CartService } from './../../../../../shared/services/cart/cart.service';
import { Product } from '../../../../../shared/interfaces/product';
import { ProductService } from './../../../../../shared/services/product/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { ProductItemComponent } from "../../../../../shared/components/ui/product-item/product-item.component";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-recent-products',
  imports: [ProductItemComponent],
  templateUrl: './recent-products.component.html',
  styleUrl: './recent-products.component.scss'
})
export class RecentProductsComponent implements OnInit {
 products!:Product[]
 private readonly _productService=inject(ProductService) 
 private readonly _toastr=inject(ToastrService)

 _cartService=inject(CartService)

 ngOnInit(): void {
   this.getProducts()
 }

 getProducts(){
  this._productService.getProducts().subscribe({
    next:(res)=> {
      console.log(res.data)
      this.products= res.data
    },
    error:(err)=> {
      console.log(err)
    },
    complete() {
      console.log("complete")
    },
  })
 }

addToCart(id:string){
  this._cartService.addProductToCart(id).subscribe({
    next:(res) => {
      console.log(res);
      this._toastr.success(res.message ,'Done');

    },
  })
}

 
}
