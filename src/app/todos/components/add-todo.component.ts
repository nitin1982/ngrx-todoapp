import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';

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
    constructor() { }

    ngOnInit(): void { }

    SaveToDo(todoid: string, todotext: string){
        console.log({id: +todoid, todotask: todotext} as ToDo);
    }
}