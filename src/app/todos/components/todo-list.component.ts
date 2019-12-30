import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';
import { AppState } from 'src/app/store/state/AppState';
import { Store, Action } from '@ngrx/store';
import { ToDoActions } from 'src/app/store/actions/todo.actions';


@Component({
    selector: 'app-todoList',
    template: `<ul><li *ngFor="let item of todos">{{item.todotask}}</li></ul>`
})
export class ToDoListComponent implements OnInit {
    todos: ToDo[];
    constructor(private store: Store<AppState>) { 
        this.store.dispatch({ type: ToDoActions.GetToDo} as Action );
    }

    ngOnInit(): void { 
        
        this.store.subscribe(
            data => console.log(data)
        );
    }
}
