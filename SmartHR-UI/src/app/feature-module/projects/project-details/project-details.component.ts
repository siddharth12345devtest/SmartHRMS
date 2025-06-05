import { Component, AfterViewInit, OnDestroy, OnInit  } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrl: './project-details.component.scss',
    standalone: false
})
export class ProjectDetailsComponent implements AfterViewInit,OnInit, OnDestroy {
  routes = routes
  editor!: Editor;
  private needRefresh = false;
  private lightGallery!: LightGallery;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  public projectSliderOptions: OwlOptions = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    smartSpeed: 2000,
    autoplay: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  };
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  toggleStrike() {
    const todoItem = document.getElementById('todoItem');
    if (todoItem) {
      todoItem.classList.toggle('todo-strike-content');
    }
  }
  ngOnInit(): void {

    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  ngAfterViewInit() {
    // Select and add click event for '.todo-item input'
    document.querySelectorAll('.todo-item input').forEach(input => {
      input.addEventListener('click', () => {
        input.parentElement?.parentElement?.classList.toggle('todo-strike');
      });
    });

    // Select and add click event for '.todo-inbox-check input'
    document.querySelectorAll('.todo-inbox-check input').forEach(input => {
      input.addEventListener('click', () => {
        input.parentElement?.parentElement?.classList.toggle('todo-strike-content');
      });
    });

    // Select and add click event for '.todo-list input'
    document.querySelectorAll('.todo-list input').forEach(input => {
      input.addEventListener('click', () => {
        input.parentElement?.parentElement?.classList.toggle('todo-strike-content');
      });
    });
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
