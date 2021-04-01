import React, { useState } from 'react'

function TaskForm({onSubmit}) {
    const [text, setText] =useState("")
    const [error, setError] =useState("")


    function handleInput(event) {
        const newText = event.target.value
        setText(newText)
        if (error && newText){
            setError("")

        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(!text){
            setError("Your task title can not be empty")
        } else {
            onSubmit(text)
            setText("")
            setError("")
        }

    }
        

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleInput}/>
            <button type='Submit'>Add</button>
            {error &&<p style={{color: 'red'}}>{error}</p>}
        </form>
    )
}

export default TaskForm
