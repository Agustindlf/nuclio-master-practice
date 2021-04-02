import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { generateId } from '../Utils/string'

function TaskForm({ onSubmit }) {
    const [title, setTitle] = useLocalStorage("taskTitle", "")
    const [error, setError] = useState("")


    function handleInput(event) {
        const newText = event.target.value
        setTitle(newText)
        if (error && newText) {
            setError("")

        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(!title){
            setError("Your task title can not be empty")
        } else {
            onSubmit({ id: generateId(), title })
            setTitle("")
            setError("")
        }

    }
        

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Task title" type="text" value={title} onChange={handleInput}/>
            <button type='Submit'>Add</button>
            {error &&<p style={{color: 'red'}}>{error}</p>}
        </form>
    )
}

export default TaskForm
