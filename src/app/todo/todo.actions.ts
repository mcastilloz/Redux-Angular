import {Action} from '@ngrx/store';

export const ADDTODO = '[TODO] ADD todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDIT_TODO = '[TODO] Edit ';
export const DELETE_TODO = '[TODO] Delete ';
export const TOGGLE_ALL_TODO = '[TODO]  Toggle All';


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

export class DeleteTodoActions implements Action {
  readonly  type = DELETE_TODO;
  constructor(public id: number) {}

}
export class ToggleAllTodoActions implements  Action {
  readonly  type = TOGGLE_ALL_TODO;
  constructor(public taskSelected: boolean) {}

 }
export type Acciones = AddTodoAction |
                        ToggleTodoActions |
                        EditTodoAction |
                        DeleteTodoActions |
                        ToggleAllTodoActions;
