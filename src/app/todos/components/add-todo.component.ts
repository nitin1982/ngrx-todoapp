import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/AppState';
import { ToDoActions, AddToDoAction } from 'src/app/store/actions/todo.actions';

@Component({
    selector: 'app-AddToDo',
    template: `<span> ID:</span>
                    <input type='text' #todoid />
                <br />
                <span>To Do: </span>
                    <input type='text' #todotext />
                <br />
                <input type='button' value='Save' 
                    (click)="SaveToDo(todoid.value, todotext.value)" />`
})
export class AddToDoComponent implements OnInit {
    constructor(private store: Store<AppState>) { }

    ngOnInit(): void { }

    SaveToDo(todoid: string, todotext: string){
        console.log({id: +todoid, todotask: todotext} as ToDo);
        this.store.dispatch(new AddToDoAction({id: +todoid, todotask: todotext} as ToDo));
    }
}