import {TodoModel} from './model/todo.model';
import * as fromActions from './todo.actions';

const todo1 = new TodoModel('Task 1');
const todo2 = new TodoModel('Task2');
const todo3 = new TodoModel('Task 3 urgente');
todo2.completed = true;
const estadoInicial: TodoModel[] = [todo1, todo2, todo3];

export function  todoReducer( state = estadoInicial,
                              action: fromActions.Acciones  ): TodoModel[] {

  switch (action.type) {

    case fromActions.ADDTODO:
      const todo = new TodoModel(action.msgtext);
      return [...state, todo];
    case fromActions.TOGGLE_TODO:
       return state.map(todoEdit => {
         if (todoEdit.id === action.id) {
           return {
            ...todoEdit,
             completed: !todoEdit.completed

           };
         } else {
           return todoEdit;
         }

       });
      // Edit TODO
    case fromActions.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
             msgtext : action.msgtext
          };
        } else {
          return todoEdit;
        }

      });
    case fromActions.DELETE_TODO:
      return state.filter(
        todoDelete => todoDelete.id !== action.id);

    case fromActions.TOGGLE_ALL_TODO:
      return state.map( todoedit => {
        return{
         ...todoedit,
          completed: action.taskSelected
        };
      });
    case fromActions.CLEAR_COMPLETED_TODO:
      return state.filter(
        todoState => !todoState.completed);


    default:
  return state;


  }

}
