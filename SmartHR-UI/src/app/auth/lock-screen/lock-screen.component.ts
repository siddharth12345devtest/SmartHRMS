import { Component, Renderer2 } from '@angular/core';
import { routes } from '../../shared/routes/routes';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lock-screen',
    templateUrl: './lock-screen.component.html',
    styleUrl: './lock-screen.component.scss',
    standalone: false
})
export class LockScreenComponent {
public routes=routes;
password: boolean[] = [false, false]; // Add more as needed

togglePassword(index: number): void {
  this.password[index] = !this.password[index];
}
constructor(
  private router: Router,
  private renderer:Renderer2
){}
navigation(){
  this.router.navigate([routes.index])
}
ngOnInit(): void {
  this.renderer.addClass(document.body, 'bg-linear-gradiant');
}
ngOnDestroy(): void {
  this.renderer.removeClass(document.body, 'bg-linear-gradiant');
}
}
