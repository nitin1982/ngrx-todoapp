import { ToDo } from 'src/app/todos/models/todo';
import { TodoState, initialToDoState } from './todoState';



export interface AppState{
    todos: TodoState
}

export const initialAppState: AppState = {
    todos: initialToDoState
};