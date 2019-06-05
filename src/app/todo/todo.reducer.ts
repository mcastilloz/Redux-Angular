import {TodoModel} from './model/todo.model';
import * as fromActions from './todo.actions';

const todo1 = new TodoModel('Ejemplo1');
const todo2 = new TodoModel('Ejemplo2');
const todo3 = new TodoModel('este es el ejemplo3');
todo2.completado = true;
const estadoInicial: TodoModel[] = [todo1, todo2, todo3];

export function  todoReducer( state = estadoInicial,
                              action: fromActions.Acciones  ): TodoModel[] {

  switch (action.type) {

    case fromActions.ADDTODO:
      const todo = new TodoModel(action.texto);
      return [...state, todo];
    case fromActions.TOGGLE_TODO:
       return state.map(todoEdit => {
         if (todoEdit.id === action.id) {
           return {
            ...todoEdit,
             completado: !todoEdit.completado

           };
         } else {
           return todoEdit;
         }

       });
      // EDITAR TODO
    case fromActions.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
             texto : action.texto
          };
        } else {
          return todoEdit;
        }

      });



    default:
  return state;


  }

}
