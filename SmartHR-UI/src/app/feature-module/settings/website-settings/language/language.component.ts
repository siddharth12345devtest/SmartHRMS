import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrl: './language.component.scss',
    standalone: false
})
export class LanguageComponent {
public routes=routes;
@ViewChildren('circleProgress') circleProgressElements!: QueryList<ElementRef>;
ngAfterViewInit() {
  this.updateProgress();
}
updateProgress() {
  this.circleProgressElements.forEach(elementRef => {
    const element = elementRef.nativeElement;
    const value = parseInt(element.getAttribute('data-value'), 10);
    const left = element.querySelector('.progress-left .progress-bar');
    const right = element.querySelector('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.style.transform = 'rotate(' + this.percentageToDegrees(value) + 'deg)';
      } else {
        right.style.transform = 'rotate(180deg)';
        left.style.transform = 'rotate(' + this.percentageToDegrees(value - 50) + 'deg)';
      }
    }
  });
}
percentageToDegrees(percentage: number): number {
  return (percentage / 100) * 360;
}
}
