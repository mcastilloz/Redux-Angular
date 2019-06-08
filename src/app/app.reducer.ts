import {TodoModel} from './todo/model/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFilters from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.actions';

export interface AppState {
  todos: TodoModel[];
  filter: fromFilterActions.validFilters;

}
export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilters.filterReducer

};
