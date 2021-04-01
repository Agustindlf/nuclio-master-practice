import React from 'react'
import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState (0)

    return (
        <button onClick={() => setCount(count + 1)}>
        Clicked: {count}
        </button>
    )
}

export default Counter