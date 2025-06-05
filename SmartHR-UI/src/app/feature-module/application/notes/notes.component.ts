import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from '../../../shared/routes/routes';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.scss',
    standalone: false
})
export class NotesComponent {
public routes = routes
  selectedValue1 = '';
  selectedValue2 = '';
  selectedValue3 = '';
  selectedValue4 = '';
  selectedValue5 = '';
  selectedValue6 = '';
  selectedValue7 = '';
  selectedValue8 = '';
  selectedValue9 = '';
  public appSidebar = true;
  text: string | undefined;
  values3: string[] = ['Dwight'];
  values1: string[] = ['Pending','Done'];
  toggleChange() {
    this.appSidebar = !this.appSidebar;
  }
  public notesSlider: OwlOptions = {
    loop: true,
    margin: 24,
    items:3,
    dots: false,
    nav: false,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1300: {
        items: 3,
      },
    },
  };
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
