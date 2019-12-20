import { ToDo } from 'src/app/todos/models/todo';

export interface TodoState{
    todos: ToDo[]
}

export interface State{
    todos: TodoState
}