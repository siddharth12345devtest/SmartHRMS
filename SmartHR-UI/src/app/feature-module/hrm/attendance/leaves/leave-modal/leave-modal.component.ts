import { Component } from '@angular/core';

@Component({
    selector: 'app-leave-modal',
    templateUrl: './leave-modal.component.html',
    styleUrl: './leave-modal.component.scss',
    standalone: false
})
export class LeaveModalComponent {
  text: string | undefined;
  selectedOption1: any;
  selectedOption2: any;
  option1 = [
    {
      id: 1,
      name: 'Sophie',
      image: 'assets/img/users/user-40.jpg',
    },
    { id: 2, name: 'Cameron', image: 'assets/img/users/user-58.jpg' },
    { id: 3, name: 'Doris', image: 'assets/img/users/user-42.jpg' },
    { id: 4, name: 'Rufana', image: 'assets/img/users/user-10.jpg' },
    { id: 5, name: 'Michael', image: 'assets/img/users/user-39.jpg' },
  ];
  option2 = [
    {
      id: 1,
      name: 'Sophie',
      image: 'assets/img/users/user-40.jpg',
    },
    { id: 2, name: 'Cameron', image: 'assets/img/users/user-58.jpg' },
    { id: 3, name: 'Doris', image: 'assets/img/users/user-42.jpg' },
    { id: 4, name: 'Rufana', image: 'assets/img/users/user-10.jpg' },
    { id: 5, name: 'Michael', image: 'assets/img/users/user-39.jpg' },
  ];
  removeOption1(user: any) {
    const index = this.selectedOption1.indexOf(user);
    if (index !== -1) {
      this.selectedOption1.splice(index, 1);
    }
  }
  removeOption2(user: any) {
    const index = this.selectedOption2.indexOf(user);
    if (index !== -1) {
      this.selectedOption2.splice(index, 1);
    }
  }
  isShown: boolean = false;
  isShown1: boolean = false;
  isShown2: boolean = false;
  isShown3: boolean = false;

  toggleShow(): void {
    this.isShown = !this.isShown;
  }
  toggleShow1(): void {
    this.isShown1 = !this.isShown1;
  }
  toggleShow2(): void {
    this.isShown2 = !this.isShown2;
  }
  toggleShow3(): void {
    this.isShown3 = !this.isShown3;
  }
}
