import { ToDoActionType, ToDoActions, AddToDoAction } from '../actions/todo.actions';
import { TodoState, initialToDoState } from '../state/todoState';



export const todoreducer = (state: TodoState = initialToDoState, 
    action: ToDoActionType ): TodoState => {
        let result: TodoState = null;
    switch(action.type){
        case ToDoActions.AddToDo:
            result = {                                
                todoList: [...state.todoList, (action as AddToDoAction).payload]
            };
            break;
        case ToDoActions.GetToDo:
            result = {                
                todoList: state.todoList
            };
            break;
        default:
            result = state;
            break;
    }

    return result;
};