import { Pipe, PipeTransform } from '@angular/core';
import {TodoModel} from '../todo/model/todo.model';
import * as fromFilter from './filter.actions';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(todos: TodoModel[],
            filter: fromFilter.validFilters): TodoModel[] {

    switch (filter) {
          case 'completed':
        return todos.filter(todo => todo.completed);
      case 'pending':
        return todos.filter(todo => !todo.completed);
      default:
        todos;
    }

    return todos;
  }

}
