import React, {useState} from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import TaskItem from './Components/TaskItem'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [tasks, setTasks] =  useLocalStorage("StoredTasks", [])

  function handleSubmit(task) {
    setTasks([...tasks, task])
  }

  function handleTaskClick(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <p>Pending Tasks: {tasks.lenght}</p>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            onClick={handleTaskClick}
          />
        ))}
      </TaskList>
    </div>
  )
}

export default App
