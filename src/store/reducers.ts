import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: []
};




export function reducer(
  state = initialState,
  action: fromActions.TodoActions
) {

  switch(action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];

      return  {
        ...state,
        data
      };
    }
    case fromActions.REMOVE_TODO: {
      const todo = action.payload;
      const data = state.data.filter((rec: any) => rec.label !== todo.label);

      return  {
        ...state,
        data
      }
    }
  }

  return state;
}

// <div *ngIf=loading$ | async>Loading..</div>
// this.loading$ = store.select(getTodosLoading)
// export const getTodosLoading = (state) => state.loading;
