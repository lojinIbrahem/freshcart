import { AuthService } from './core/services/auth/auth.service';
import { Component, inject, OnInit } from '@angular/core';

import { FlowbiteService } from './shared/services/flowbit.service';
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'freshCart';
  _flowbiteService = inject(FlowbiteService)
  _authService =inject(AuthService)
  constructor() {}

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
    this._authService.isLoggedInUser()
  }
}
