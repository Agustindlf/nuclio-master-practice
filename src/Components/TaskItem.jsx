import React from 'react'

function TaskItem({title, onClick}) {
    function handleClick(){
        onClick(title)
    }
    return (
        <li onClick={handleClick}>{title}</li>
    )
}

export default TaskItem