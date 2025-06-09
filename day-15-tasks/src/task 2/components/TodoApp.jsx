import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import useLocalStorage from '../hooks/useLocalStorage'

function TodoApp() {
    const [tasks, setTasks] = useLocalStorage('task2-todos', [])
    const [filter, setFilter] = useState('all')

    const addTask = (text) => {
        setTasks([...tasks, { id: Date.now(), text, completed: false }])
    }

    const updateTask = (id, newText) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task))
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }

    const deleteTask = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?")
        if (confirmDelete) {
            setTasks(tasks.filter(task => task.id !== id))
        }
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed
        if (filter === 'pending') return !task.completed
        return true
    })

    return (
        <div className="task2-todo-container">
            <h2>Todo List</h2>

            <TodoForm addTask={addTask} />

            <div className="task2-filters">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={filter === 'pending' ? 'active' : ''}
                    onClick={() => setFilter('pending')}
                >
                    Pending
                </button>
                <button
                    className={filter === 'completed' ? 'active' : ''}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>

            <TodoList
                tasks={filteredTasks}
                toggleComplete={toggleComplete}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
        </div>
    )
}

export default TodoApp
