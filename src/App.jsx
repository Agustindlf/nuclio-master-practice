import React, {useState} from 'react'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
import TaskItem from './Components/TaskItem'



function App() {
  const [tasks, setTasks] =  useState(["Do dishes", "Walk dog"])

  function handleSubmit(text) {
    setTasks([...tasks, text])
  }

  function handleTaskClick(title){
    setTasks(tasks.filter(task => task !== title))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <p>Pending Tasks: {tasks.lenght}</p>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList>
        {tasks.map(title => (
          <TaskItem key={title} title={title} onClick={handleTaskClick}/>
        ))}
      </TaskList>
    </div>
  )
}

export default App
