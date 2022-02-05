import React from "react";
import TodoInput from "./TodoInput";
import './TodoInpu.css';

import { useSelector, useDispatch } from "react-redux";
import { completeTodo,addTodo,removeTodo,updateTodo } from "../redux/action";
import Todo from "./Todo";
const Todolist = () => {                                           //redux function that dispatches an action which is then sent to reducers which change state based on that action
  let dispatch = useDispatch();
  const state = useSelector((state) => ({ ...state.todos }));    ///update the state
  const create=(newTodo)=>{
      dispatch(addTodo(newTodo));                               //dispatching add new todo
  }
  const update =(id,updatedTask)=>{
dispatch(updateTodo({id,updatedTask}))
  };
  return (
    <div className="TodoList">
      <h1>Todo App</h1>
      <TodoInput createTodo={create}/>
      <ul>
        <div className="todoList">
          {state.todos &&
            state.todos.map((todo) => {
              return (                                                      //to show todo list
                <div className="todo" key={todo.id}>
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    toggleTodo={()=>dispatch(completeTodo(todo))}
                    removeTodo={()=>dispatch(removeTodo(todo))}
                    updateTodo={update}
                  />
                </div>
              );
            })}
        </div>
      </ul>
    </div>
  );
};

export default Todolist;
