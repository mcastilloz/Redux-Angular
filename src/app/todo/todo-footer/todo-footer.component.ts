import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {TodoModel} from '../model/todo.model';
import {ClearAllCompletedActions} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
filtervalids: fromFilter.validFilters[] = ['all', 'completed', 'pending'];
filterActual: fromFilter.validFilters;
pendings: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
            this.countPendings(state.todos);
            this.filterActual = state.filter;

    });
  }

  changeFilter(newFilter: fromFilter.validFilters) {
   const action = new fromFilter.SetFilterAction(newFilter);
   this.store.dispatch(action);

  }
   countPendings(todos: TodoModel[]) {
    this.pendings = todos.filter(todo => !todo.completed).length;
   }

  clearCompleted() {
    const action = new ClearAllCompletedActions;
    this.store.dispatch(action);
  }
}
