// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

// action creators
export class AddTodo {
  readonly type = ADD_TODO;

  constructor(public payload: any) {}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;

  constructor(public payload: any) {}
}

export type TodoActions = AddTodo | RemoveTodo;
