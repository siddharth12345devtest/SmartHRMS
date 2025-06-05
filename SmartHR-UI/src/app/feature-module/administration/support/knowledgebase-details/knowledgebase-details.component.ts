import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-knowledgebase-details',
    templateUrl: './knowledgebase-details.component.html',
    styleUrl: './knowledgebase-details.component.scss',
    standalone: false
})
export class KnowledgebaseDetailsComponent {
routes= routes
}
