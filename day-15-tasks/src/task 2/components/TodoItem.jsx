import React, { useState } from 'react'

function TodoItem({ task, toggleComplete, updateTask, deleteTask }) {
    const [isEditing, setIsEditing] = useState(false)
    const [newText, setNewText] = useState(task.text)

    const handleUpdate = () => {
        updateTask(task.id, newText)
        setIsEditing(false)
    }

    return (
        <div className={`task2-todo-item ${task.completed ? 'task2-completed' : ''}`}>
            {isEditing ? (
                <>
                    <input
                        className="task2-input"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                    <span onClick={() => toggleComplete(task.id)}>
                        {task.text}
                    </span>
                    <div>
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default TodoItem
