import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ tasks, toggleComplete, updateTask, deleteTask }) {
    return (
        <div className="task2-todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}

export default TodoList
