import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-knowledgebase',
    templateUrl: './knowledgebase.component.html',
    styleUrl: './knowledgebase.component.scss',
    standalone: false
})
export class KnowledgebaseComponent {
routes = routes
}
