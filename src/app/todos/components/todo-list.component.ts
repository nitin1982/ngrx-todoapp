import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';

@Component({
    selector: 'app-todoList',
    template: `<ul><li *ngFor="let item of todos">{{item.todotask}}</li></ul>`
})
export class ToDoListComponent implements OnInit {
    todos: ToDo[];
    constructor() { }

    ngOnInit(): void { }
}
