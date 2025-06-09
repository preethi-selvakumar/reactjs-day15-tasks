import React, { useState } from 'react'

function TodoForm({ addTask }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        addTask(text)
        setText('')
    }

    return (
        <form className="task2-todo-form" onSubmit={handleSubmit}>
            <input
                className="task2-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task"
            />
            <button className="task2-button" type="submit">Add</button>
        </form>
    )
}

export default TodoForm
