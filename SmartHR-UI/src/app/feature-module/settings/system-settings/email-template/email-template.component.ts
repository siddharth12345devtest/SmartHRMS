import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-email-template',
    templateUrl: './email-template.component.html',
    styleUrl: './email-template.component.scss',
    standalone: false
})
export class EmailTemplateComponent {
  editor!: Editor;
  editor1!: Editor;
  ngOnInit():void{
    this.editor = new Editor();
    this.editor1 = new Editor();
  }

 toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
  ];

}
