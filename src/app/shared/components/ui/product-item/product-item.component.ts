import { RouterLink } from '@angular/router';
import { Product } from './../../../interfaces/product';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  isLoading:boolean=false
  
@Input()  product!:Product
@Output() fireAddToCart: EventEmitter<string> = new EventEmitter()

handleAddCart(id:string){
  this.isLoading=true

  setTimeout( () => {
      this.fireAddToCart.emit(id);
      this.isLoading=false;
  },1000)



}


}
