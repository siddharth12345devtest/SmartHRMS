import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-sms-template',
    templateUrl: './sms-template.component.html',
    styleUrl: './sms-template.component.scss',
    standalone: false
})
export class SmsTemplateComponent {
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
