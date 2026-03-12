import React, { useState } from 'react'
const TodoList = () => {
    const [task, setTask] = useState("")
    const [todo, setTodo] = useState([]);

    const addToTask = () => {
        if(task.trim() === "") return
       setTodo([...todo, task])
       setTask("");
    }

    const deleteTask = (indexToDelete) => {
       const newTodo = todo.filter((task, index) => index !== indexToDelete )
       setTodo(newTodo);
    }
  return (
    <div className="app">
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className='main-container'>
      <h1 className='title'>Todo Application</h1>
      <input type='text' placeholder='Enter your task...' onChange={(e) => setTask(e.target.value)} value={task}/>
      <button onClick={addToTask}>Task</button>
      <ul>
      {todo.map((todos, index) => (
           <li key={index}>{todos}
           <button onClick = {() => deleteTask(index)}>Delete </button>
           </li>
      ))}
    </ul>
    </div>
    </div>
  )
}

export default TodoList
