import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { LoginComponent } from './core/pages/login/login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { loginUserGuard } from './core/guards/auth/login-user.guard';

export const routes: Routes = [
   {path:"auth",component:AuthLayoutComponent ,children :[
    {path:"register" ,canActivate:[loginUserGuard],loadComponent:()=>import('./core/pages/regisiter/regisiter.component').then(c=>c.RegisiterComponent)},
    {path:"login" ,canActivate:[loginUserGuard],loadComponent:()=>import('./core/pages/login/login.component').then(c=>c.LoginComponent)},
    {path:"forget-password",canActivate:[loginUserGuard],loadComponent:()=>import('./core/pages/forget-password/forget-password.component').then(c=>c.ForgetPasswordComponent)}
   ]},

   {path:"" ,canActivate:[loginUserGuard],loadComponent:()=>import('./core/pages/login/login.component').then(c=>c.LoginComponent)},
   {path:"home",canActivate:[authGuard],loadComponent:()=>import('./features/pages/home/home.component').then(c=>c.HomeComponent)},
   {path:"brands",canActivate:[authGuard],loadComponent:()=>import('./features/pages/brands/brands.component').then(c=>c.BrandsComponent)},
   {path:"products",canActivate:[authGuard],loadComponent:()=>import('./features/pages/products/products.component').then(c=>c.ProductsComponent)},
   {path:"categories",canActivate:[authGuard],loadComponent:()=>import('./features/pages/categories/categories.component').then(c=>c.CategoriesComponent)},
   {path:"cart",canActivate:[authGuard],loadComponent:()=>import('./features/pages/cart/cart.component').then(c=>c.CartComponent)},
   {path:"checkout/:cartId",canActivate:[authGuard],loadComponent:()=>import('./features/pages/checkout/checkout.component').then(c=>c.CheckoutComponent)},
   {path:"productDetails/:id",canActivate:[authGuard],loadComponent:()=>import('./features/pages/product-details/product-details.component').then(c=>c.ProductDetailsComponent)},
   {path:"allorders",canActivate:[authGuard],loadComponent:()=>import('./features/pages/order/order.component').then(c=>c.OrderComponent)},



   {path:"**",loadComponent:()=>import('./core/pages/not-found/not-found.component').then(c=>c.NotFoundComponent)},
];
