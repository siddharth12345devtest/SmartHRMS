import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-knowledgebase-view',
    templateUrl: './knowledgebase-view.component.html',
    styleUrl: './knowledgebase-view.component.scss',
    standalone: false
})
export class KnowledgebaseViewComponent {
routes =routes
}
