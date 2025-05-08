import { JsonPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { ErrorComponentComponent } from "../../../shared/components/ui/error-component/error-component.component";
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomInputComponent } from "../../../shared/components/ui/custom-input/custom-input.component";

@Component({
  selector: 'app-regisiter',
  imports: [ReactiveFormsModule, JsonPipe, ErrorComponentComponent, CustomInputComponent],
  templateUrl: './regisiter.component.html',
  styleUrl: './regisiter.component.scss'
})
export class RegisiterComponent implements OnDestroy{
 apiError!:string
 subscribe:Subscription =new Subscription()
 Loading:boolean=false
 _router=inject(Router)
    registerform :FormGroup =new FormGroup 
    ({
      name:new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
      email:new FormControl('Lujain@gmail.com',[Validators.required,Validators.email]),
      password:new FormControl('Lo@12345',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
      rePassword:new FormControl('Lo@12345',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
      phone:new FormControl(null,[Validators.required, Validators.pattern('01[0125][0-9]{8}')]),
    },this.validrePassword) 


    _authService =inject(AuthService)
    register(){
      console.log(this.registerform);
      if(this.registerform.invalid){
        this.registerform.markAllAsTouched()
      }
      else{
        this.apiError='';
        this.Loading=true;

        if(this.subscribe) this.subscribe.unsubscribe()
        this.subscribe = this._authService.registerUser(this.registerform.value).subscribe({

        next:(res)=> {
          console.log(res);
          this.Loading=false
                    this._router.navigate(['/auth/login'])

        },
        error:(err)=> {
          console.log(err);
          this.apiError=err.error.message
          this.Loading=false
        },
        complete:()=>{}
      })
      }
    }

    validrePassword(form:AbstractControl){
      const password =form.get('password')?.value;
      const rePassword =form.get('rePassword')?.value;
      if(password==rePassword){
        return null;
      }
      else{return {misMatch:true}}

    }
    ngOnDestroy(): void {
      this.subscribe.unsubscribe()
    }
}
