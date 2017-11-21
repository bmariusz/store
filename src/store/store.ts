import {TodoActions} from "./actions";

export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    // { todos: function () {} }
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  dispatch(action: TodoActions) {
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];

    this.notify();

    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    }
  }

  private notify() {
    this.subscribers.forEach(sub => sub(this.value));
  }

  reduce(state, action) {
    const newState = {};

    for (const prop in this.reducers) {
      // state.todos = this.reducers.todos(state.todos, action)
      newState[prop] = this.reducers[prop](state[prop], action)
    }

    return newState;
  }
}
