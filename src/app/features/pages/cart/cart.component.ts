import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Cart } from '../../../shared/interfaces/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  isLoading:boolean=false
  cartDetails!:Cart
  private readonly _cartService=inject(CartService)

  ngOnInit(): void {
    this.getCart()
  }


  getCart(){
    this.isLoading=true
    this._cartService.getCart().subscribe({
      next:(res) => {
        console.log(res);
        this.cartDetails=res
        this.isLoading=false
      },
    })
  }

  removeItem(id:string){
    this.isLoading=true
    this._cartService.removeCart(id).subscribe({
      next:(res)=> {
        console.log(res);
        this.isLoading=false
        this.cartDetails=res
      },
    })
  }

  updateCount(id:string,count:number){
    this.isLoading=true
    this._cartService.updateCartProduct(id,`${count}`).subscribe({
      next:(res)=> {
        console.log(res);
        this.isLoading=false
        this.cartDetails=res
      },
    })
  }

  clearCart(){
    this.isLoading=true
    this._cartService.clearCart().subscribe({
      next:(res) =>{
        console.log(res);
        this.isLoading=false
        this.cartDetails=res
      },
    })
  }
}
