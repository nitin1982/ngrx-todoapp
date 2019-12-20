import { Action } from '@ngrx/store';
import { ToDo } from 'src/app/todos/models/todo';
import { type } from 'os';

export enum ToDoActions{
    AddToDo = "[ToDo] Add ToDo",
    RemoveToDo = "[ToDo] Remove ToDo"
}
export class AddToDoAction implements Action{
    readonly type = ToDoActions.AddToDo;

    constructor(payload: ToDo){}
}

export class RemoveToDoAction implements Action{
    readonly type = ToDoActions.RemoveToDo;

    constructor(payloadIndex: number){}
}

export type ToDoActionType = AddToDoAction | RemoveToDoAction;