import { Component } from '@angular/core';
import { RecentProductsComponent } from "./component/recent-products/recent-products.component";
import { PopularCategoriesComponent } from "./component/popular-categories/popular-categories.component";
import { MainCategoryComponent } from "./component/main-category/main-category.component";

@Component({
  selector: 'app-home',
  imports: [RecentProductsComponent, PopularCategoriesComponent, MainCategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
