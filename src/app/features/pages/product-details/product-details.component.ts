import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product/product.service';
import { Product } from '../../../shared/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-details',
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
isLoading:boolean=false
private readonly _activatedRoute=inject(ActivatedRoute)
private readonly _productService=inject(ProductService)
private readonly _cartService =inject(CartService)
private readonly _toastr=inject(ToastrService)
productDetails:Product = {} as Product

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
  },
  nav: true
}

ngOnInit(): void {
this.getId();  
}

getId(){
let {id}:any=this._activatedRoute.snapshot.params
console.log(id);
this.getDetails(id)
}


getDetails(id:string){
this._productService.getUserId(id).subscribe({
  next:(res) => {
    console.log(res);
    this.productDetails=res.data
  },
})
}


addToCart(id:string){
  this.isLoading=true
this._cartService.addProductToCart(id).subscribe({
  next:(res) => {
    console.log(res);
    this.isLoading=false;
      this._toastr.success(res.message ,'Done');

  },
})
}


}
