import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { apiResultFormat, breadCrumbItems, CandidateInfo } from '../../../../shared/models/models';
import { DataService } from '../../../../shared/data/data.service';

@Component({
    selector: 'app-candidates-grid',
    templateUrl: './candidates-grid.component.html',
    styleUrl: './candidates-grid.component.scss',
    standalone: false
})
export class CandidatesGridComponent {
  public routes = routes;
  public actualData: CandidateInfo[] = [];
  breadCrumbItems: breadCrumbItems[] =[];
  constructor(
    private data: DataService,
  ) {
    this.breadCrumbItems = [
      { label: 'Recruitment' },
      { label: 'Candidates Grid', active: true }
  ];
    this.data.getCandidatesList().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
    });
  }
}
