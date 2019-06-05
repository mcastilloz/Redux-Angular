import {Action} from '@ngrx/store';

export const ADDTODO = '[TODO] ADD todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDIT_TODO = '[TODO] eDIT';


export class AddTodoAction implements Action {
  readonly  type = ADDTODO;
  constructor(public msgtext: string) {}

}

export class ToggleTodoActions implements Action {
  readonly  type = TOGGLE_TODO;
  constructor(public id: number) {}

}

export class EditTodoAction implements Action {
  readonly  type = EDIT_TODO;
  constructor(public id: number, public msgtext: string) {}

}

export type Acciones = AddTodoAction |
                        ToggleTodoActions |
                        EditTodoAction;
