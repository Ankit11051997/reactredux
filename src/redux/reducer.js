import * as types from "./actiontype";                        // reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {   //reducer takes state,action from dispatch function
  switch (action.type) {
    case types.ADD_TODO:                                    //ADD TO DO action
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        completed: false,
      };
      const addedTodos = [...state.todos, newTodo];
      return { ...state, todos: addedTodos };

    case types.REMOVE_TODO:                                     //Remove Todo action
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      return { ...state, todos: filterTodo };

    case types.UPDATE_TODO:                                       //Update Todo action
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updatedTask };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };

    case types.COMPLETE_TODO:                                           //toggle Task/Todo
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : t
      );
      return { ...state, todos: toggleTodos };

    default:
      return state;
  }
};
export default todosReducer;
