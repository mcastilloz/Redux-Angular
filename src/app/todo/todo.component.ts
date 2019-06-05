import { Component, OnInit } from '@angular/core';
import {ToggleAllTodoActions} from './todo.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
selectedtask = false;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.selectedtask = !this.selectedtask;
    const accion = new ToggleAllTodoActions(this.selectedtask);
    this.store.dispatch( accion);
}


}
