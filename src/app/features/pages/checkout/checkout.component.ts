import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order/order.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})

export class CheckoutComponent{
  checkoutForm!:FormGroup
  cartId!:string
  formAction :string ='';
private readonly _activatedRoute=inject(ActivatedRoute)
private readonly _orderService=inject(OrderService)

ngOnInit() {
  this.getCartId();
  this.initForm();
}

getCartId(){
this.cartId = this._activatedRoute.snapshot.params['cartId']
}

initForm(){
  this.checkoutForm = new FormGroup({
  details:new FormControl(null,[Validators.required]),
  phone:new FormControl(null,[Validators.required]),
  city:new FormControl(null,[Validators.required]),
});
}

casheOrder(){
this._orderService.cashOrder(this.cartId,this.checkoutForm.value).subscribe({
  next:(res)=> {
    console.log(res);    
  }, 
})
}

onlineOrder(){
  this._orderService.onlineOrder(this.cartId,this.checkoutForm.value).subscribe({
    next:(res)=> {
      console.log(res);    
      open(res.session.url);
    }, 
  })
  }

  completeOrder(){
    if (this.formAction ==='cashe'){
      this.casheOrder();
    }
    else if (this.formAction ==='online'){
      this.onlineOrder();
    }
  }

}

