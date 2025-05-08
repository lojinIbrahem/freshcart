import { Component } from '@angular/core';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-category',
  imports: [CarouselModule],
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.scss'
})
export class MainCategoryComponent {
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
}

}
