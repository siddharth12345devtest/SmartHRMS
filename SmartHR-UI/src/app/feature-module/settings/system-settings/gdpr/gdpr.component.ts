import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-gdpr',
    templateUrl: './gdpr.component.html',
    styleUrl: './gdpr.component.scss',
    standalone: false
})
export class GdprComponent {
  editor!: Editor;

  ngOnInit():void{
    this.editor = new Editor();
  }

 toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
  ];

}
