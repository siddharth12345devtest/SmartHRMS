import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-blog-modal',
    templateUrl: './blog-modal.component.html',
    styleUrl: './blog-modal.component.scss',
    standalone: false
})
export class BlogModalComponent {
  editor!: Editor;
  editor1!: Editor;
  values1: string[] = ['HRMS','Recruitment','HRTech'];
  toolbar: Toolbar = [
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['bold', 'italic','underline', 'strike'],
    [ 'image'],
    
  ];
  ngOnInit():void{
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
}