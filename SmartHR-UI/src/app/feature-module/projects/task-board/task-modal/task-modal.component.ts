import { Component ,  OnDestroy,
  OnInit} from '@angular/core';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrl: './task-modal.component.scss',
    standalone: false
})
export class TaskModalComponent implements OnInit, OnDestroy {
  values: string[] =['Jerald']
  values2: string[] = ['Jerald', 'Andrew', 'Philip', 'Davis'];
  values3: string[] = ['Collab'];
  editor!: Editor;
  editor1!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
  ];
  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  ngOnInit(): void {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor1.destroy();
  }
}
