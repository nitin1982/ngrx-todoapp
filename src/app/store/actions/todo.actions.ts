import { Action } from '@ngrx/store';
import { ToDo } from 'src/app/todos/models/todo';


export enum ToDoActions{
    AddToDo = "[ToDo] Add ToDo",
    RemoveToDo = "[ToDo] Remove ToDo",
    GetToDo = "[ToDo] GetToDo"
}
export class AddToDoAction implements Action{
    public readonly type = ToDoActions.AddToDo;

    constructor(public payload: ToDo){}
}

export class RemoveToDoAction implements Action{
    public readonly type = ToDoActions.RemoveToDo;

    constructor(public payloadIndex: number){}
}

export class GetToDoAction implements Action{
    public readonly type = ToDoActions.GetToDo;
}
export type ToDoActionType = AddToDoAction | RemoveToDoAction | GetToDoAction;