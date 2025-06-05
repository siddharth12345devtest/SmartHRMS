import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ApplicationComponent } from './application.component';
import { CallHistoryComponent } from './call/call-history/call-history.component';
// import { FileManagerComponent } from './file/file-manager/file-manager.component';
// import { AudioCallComponent } from './call/audio-call/audio-call.component';
import { VideoCallComponent } from './call/video-call/video-call.component';
import { TodoComponent } from './todo/todo.component';
import { OutgoingCallComponent } from './call/outgoing-call/outgoing-call.component';
import { IncomingCallComponent } from './call/incoming-call/incoming-call.component';
import { VoiceCallComponent } from './call/voice-call/voice-call.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { KanbanComponent } from './kanban/kanban.component';
import { NotesComponent } from './notes/notes.component';
// import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'chats',
        component: ChatComponent,
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./calendar/calendar.module').then((m) => m.CalendarModule),
      },
      {
        path: 'email',
        loadChildren: () =>
          import('./email/email.module').then((m) => m.EmailModule),
      },
      {
        path: 'calls/call-history',
        component: CallHistoryComponent,
      },

      {
        path: 'calls/voice-call',
        component: VoiceCallComponent,
      },
      {
        path: 'calls/video-call',
        component: VideoCallComponent,
      },
      {
        path:'calls/outgoing-call',
        component:OutgoingCallComponent
      },
      {
        path:'calls/incoming-call',
        component:IncomingCallComponent
      },
      {
        path: 'todo',
        component: TodoComponent,
      },
      {
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'todo-list',
        component: TodoListComponent,
      },
      {
        path: 'file-manager',
        component: FileManagerComponent,
      },
      {
        path: 'social-feed',
        component: SocialFeedComponent,
      },
      {
        path: 'kanban',
        component: KanbanComponent,
      },
      { path: 'kanban-view', loadChildren: () => import('./kanban-view/kanban-view.module').then(m => m.KanbanViewModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
