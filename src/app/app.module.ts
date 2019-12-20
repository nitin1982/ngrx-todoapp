import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddToDoComponent } from './todos/components/add-todo.component';
import { ToDoListComponent } from './todos/components/todo-list.component';

@NgModule({
  declarations: [
    AppComponent, AddToDoComponent, ToDoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
