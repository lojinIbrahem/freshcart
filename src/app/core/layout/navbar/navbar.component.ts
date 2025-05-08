import { AuthService } from './../../services/auth/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLoggedIn:any;
_authService=inject(AuthService)
_router=inject(Router)
constructor (){}
checkData(){
 this._authService.userData.subscribe({
    next:(res) => {
      this.isLoggedIn=res;
        },
  })
}
ngOnInit(): void {
  this.checkData()
}
signOut(){
  localStorage.removeItem("userToken")
  this._authService.userData.next(null)
  this._router.navigate(['/auth/login'])
}
}

