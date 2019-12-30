import { ToDo } from 'src/app/todos/models/todo';

export interface TodoState{
    todoList: ToDo[]
}

export const initialToDoState: TodoState = {
    todoList: []
}