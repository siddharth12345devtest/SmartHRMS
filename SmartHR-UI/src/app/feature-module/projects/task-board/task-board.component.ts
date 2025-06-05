import { Component } from '@angular/core';
import { breadCrumbItems } from '../../../shared/models/models';


@Component({
    selector: 'app-task-board',
    templateUrl: './task-board.component.html',
    styleUrl: './task-board.component.scss',
    standalone: false
})
export class TaskBoardComponent {
  breadCrumbItems: breadCrumbItems[] =[];
  constructor() {
    this.breadCrumbItems = [
      { label: 'Projects' },
      { label: 'Task Board', active: true }
  ];
}
}


