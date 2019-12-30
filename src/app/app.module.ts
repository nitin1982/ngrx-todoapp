import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddToDoComponent } from './todos/components/add-todo.component';
import { ToDoListComponent } from './todos/components/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { todoreducer } from './store/reducers/todo.reducers';

@NgModule({
  declarations: [
    AppComponent, AddToDoComponent, ToDoListComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot({
      todos: todoreducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
