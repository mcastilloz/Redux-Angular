import { Component, OnInit } from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {TodoModel} from '../model/todo.model';
import * as fromFilter from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  todos: TodoModel[] = [];
  filter: fromFilter.validFilters;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
        this.todos = state.todos;
        this.filter = state.filter;

    });
  }

}
