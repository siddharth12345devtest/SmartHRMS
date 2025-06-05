import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrl: './task-details.component.scss',
    standalone: false
})
export class TaskDetailsComponent {
  public routes = routes
  public projectSliderOptions: OwlOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    autoplay: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };

}
