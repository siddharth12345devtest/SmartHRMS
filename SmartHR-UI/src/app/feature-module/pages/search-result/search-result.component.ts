import { AfterViewInit, Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { breadCrumbItems } from '../../../shared/models/models';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrl: './search-result.component.scss',
    standalone: false
})
export class SearchResultComponent implements AfterViewInit  {
  breadCrumbItems: breadCrumbItems[] =[];
  private lightGallery!: LightGallery;
  private needRefresh = false;
  constructor() {
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Search Result', active: true }
  ];
}
settings = {
  counter: false,
  plugins: [lgZoom, lgVideo],
};
ngAfterViewInit() {
  if (this.needRefresh) {
    this.lightGallery.refresh();
    this.needRefresh = false;
  }
}
onInit = (detail: { instance: LightGallery }): void => {
  this.lightGallery = detail.instance;
};
onBeforeSlide = (detail: BeforeSlideDetail): void => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { index, prevIndex } = detail;
};
}
