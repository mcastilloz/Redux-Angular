import {Action} from '@ngrx/store';

export const SET_FILTER = '[TODO] SET FILTER';
export type validFilters = 'all'|'completed'|'pending';

export class SetFilterAction implements  Action {
  readonly  type = SET_FILTER;

  constructor(public filter: validFilters) {}

}

export type accions = SetFilterAction;
