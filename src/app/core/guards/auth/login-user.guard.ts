import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginUserGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)
   const _PLATFORM_ID =inject(PLATFORM_ID)
 
 if(isPlatformBrowser(_PLATFORM_ID))
  {
   if(localStorage.getItem("userToken"))
     {  
         _router.navigate(['/home'])
         return false;
        }
     return true; 
 }else{
     return false;
    }
 };