import { Login } from './../../interfaces/auth';
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription, timer } from 'rxjs';
import { ErrorComponentComponent } from "../../../shared/components/ui/error-component/error-component.component";
import { CustomInputComponent } from "../../../shared/components/ui/custom-input/custom-input.component";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ErrorComponentComponent, CustomInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit{
apiError!:string
 subscribe:Subscription =new Subscription()
 Loading:boolean=false
 showInput:boolean=true
 _router=inject(Router)
_formBuilder=inject(FormBuilder)

//loginForm :FormGroup =new FormGroup
  //  ({
    //  email:new FormControl('Lujain30@gmail.com',[Validators.required,Validators.email]),
     // password:new FormControl('Lo@12345',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
   //  }) 
   
loginForm! :FormGroup
    _authService =inject(AuthService)
    Login(){
      console.log(this.loginForm);
      if(this.loginForm.invalid){
        this.loginForm.markAllAsTouched()
      }
      else{
        this.apiError='';
        this.Loading=true;

        if(this.subscribe) this.subscribe.unsubscribe()
        this.subscribe = this._authService.loginUser(this.loginForm.value).subscribe({

        next:(res)=> {
          console.log(res);
          this.Loading=false
          localStorage.setItem("userToken",res.token)
          this._authService.saveData();

           timer(2000).subscribe(() => {
            this._router.navigate(['/home'])
          })
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
ngOnInit(): void {
  this.initForm();
}
  initForm(){
 this.loginForm=new FormGroup
   ({
  email:new FormControl('Lujain@gmail.com',[Validators.required,Validators.email]),
  password:new FormControl('Lo@12345',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
     }) 
  }  


  showPassword(){
    this.showInput=!this.showInput;
  }


    ngOnDestroy(): void {
      this.subscribe.unsubscribe()
    }
}
