import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { breadCrumbItems } from '../../../../shared/models/models';

@Component({
    selector: 'app-all-blogs',
    templateUrl: './all-blogs.component.html',
    styleUrl: './all-blogs.component.scss',
    standalone: false
})
export class AllBlogsComponent {
public routes=routes;
breadCrumbItems: breadCrumbItems[] =[];
bsValue = new Date();
bsRangeValue: Date[];
maxDate = new Date();
values1: string[] = ['Sidebar','Header','Footer'];
constructor(){
  this.breadCrumbItems = [
    { label: 'Content' },
    { label: 'Blogs', active: true }
];
this.maxDate.setDate(this.maxDate.getDate() + 7);
this.bsRangeValue = [this.bsValue, this.maxDate];

}
}
