import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListEditComponent } from './to-do-list-edit/to-do-list-edit.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';
import { DropdownDirective } from './sharedAssets/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    ToDoListComponent,
    ToDoListEditComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskItemComponent, 
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
