import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-kanban',
    templateUrl: './kanban.component.html',
    styleUrl: './kanban.component.scss',
    standalone: false
})
export class KanbanComponent {
  routes = routes
}
