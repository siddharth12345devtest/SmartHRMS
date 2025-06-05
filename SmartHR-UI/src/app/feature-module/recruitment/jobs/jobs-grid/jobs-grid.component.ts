import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, JobsInfo } from '../../../../shared/models/models';
import { DataService } from '../../../../shared/data/data.service';

@Component({
    selector: 'app-jobs-grid',
    templateUrl: './jobs-grid.component.html',
    styleUrl: './jobs-grid.component.scss',
    standalone: false
})
export class JobsGridComponent {
  public routes = routes;
  public actualData: JobsInfo[] = [];
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(
    private data: DataService,
  ) {
    this.breadCrumbItems = [
      { label: 'Recruitment' },
      { label: 'Job Grid', active: true }
  ];
    this.data.getJobList().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
    });
  }

}
