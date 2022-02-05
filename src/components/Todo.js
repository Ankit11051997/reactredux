import React, { useState } from "react";        //rendering the first page
import "./Todo.css";
const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {    //destructuring props from todolist
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const handleUpdate = (e) => {e.preventDefault();
  updateTodo(id,editTask);
  
  setIsEditing(false);
  };
  return (                                                        //toggling task styling if completed
    <div>
      <div className={completed ? "Todo completed" : "Todo"}>  
        {isEditing ? (
          <form className=" form"  onSubmit={handleUpdate}>
            <div className="Todo-edit-form" >
              <input
                type="text"
                name="task"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
              ></input>

              <button >save</button>
            </div>
          </form>
          
        ) : (
          <div className="task-text">
            <li className="Todo-task" onClick={toggleTodo}>      
              {task}
            </li>
          </div>
        )}

        <div className="todo-buttons">   
          <button onClick={() => setIsEditing(true)}>          
            <i className="fas fa-pen" />
          </button>
          <button onClick={removeTodo}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
