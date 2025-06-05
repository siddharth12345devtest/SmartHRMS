import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from '../../shared/shared-module';
import { TodoComponent } from './todo/todo.component';
import { OutgoingCallComponent } from './call/outgoing-call/outgoing-call.component';
import { IncomingCallComponent } from './call/incoming-call/incoming-call.component';
import { VideoCallComponent } from './call/video-call/video-call.component';
import { VoiceCallComponent } from './call/voice-call/voice-call.component';
import { CustomPaginationModule } from '../../shared/custom-pagination/custom-pagination.module';
import { CallHistoryComponent } from './call/call-history/call-history.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { KanbanComponent } from './kanban/kanban.component';
import { NotesComponent } from './notes/notes.component';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [
    ApplicationComponent,
    ChatComponent,
    TodoComponent,
    OutgoingCallComponent,
    IncomingCallComponent,
    VideoCallComponent,
    VoiceCallComponent,
    CallHistoryComponent,
    TodoListComponent,
    FileManagerComponent,
    SocialFeedComponent,
    KanbanComponent,
    NotesComponent

  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
    CustomPaginationModule,
    ChipsModule
  ]
})
export class ApplicationModule { }
