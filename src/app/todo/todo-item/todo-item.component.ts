import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodoModel} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';
// import {AppModule} from '../../app.module';
import {Store} from '@ngrx/store';
import {DeleteTodoActions, EditTodoAction, ToggleTodoActions} from '../todo.actions';
import {AppState} from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input()  todo: TodoModel;
@ViewChild('txtInputLocal') txtInputLocal: ElementRef;
chkField: FormControl;
txtInput: FormControl;
  editando: boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.msgtext, Validators.required);
    this.chkField.valueChanges.subscribe(valor => {
        const  action = new ToggleTodoActions(this.todo.id);
        this.store.dispatch(action);



    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputLocal.nativeElement.select();
  }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.msgtext) {
     return;
    }
    const  action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  deleteTask() {
    const  action = new DeleteTodoActions(this.todo.id);
    this.store.dispatch(action);

  }
}
