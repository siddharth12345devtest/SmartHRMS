import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-kanban-view',
    templateUrl: './kanban-view.component.html',
    styleUrl: './kanban-view.component.scss',
    standalone: false
})
export class KanbanViewComponent {
  routes = routes
}
