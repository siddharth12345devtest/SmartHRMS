import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';
@Component({
    selector: 'app-performance-review',
    templateUrl: './performance-review.component.html',
    styleUrl: './performance-review.component.scss',
    standalone: false
})
export class PerformanceReviewComponent {
  public routes = routes;
  initChecked = false;
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(){
    this.breadCrumbItems = [
            { label: 'Performance' },
            { label: 'Performance Reviews', active: true }
        ];
  }
}
