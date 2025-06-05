import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-cronjob-schedule',
    templateUrl: './cronjob-schedule.component.html',
    styleUrl: './cronjob-schedule.component.scss',
    standalone: false
})
export class CronjobScheduleComponent {
public routes=routes;
}
