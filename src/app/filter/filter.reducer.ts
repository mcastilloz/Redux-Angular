import * as fromfilter from './filter.actions';


const estadoInicial: fromfilter.validFilters = 'all';

export function filterReducer(state = estadoInicial,
                              action: fromfilter.accions):
                              fromfilter.validFilters {

      switch (action.type) {
        case fromfilter.SET_FILTER:
          return action.filter;
        default :
          return state;

      }

}
