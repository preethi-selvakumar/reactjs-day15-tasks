import React, { useState, useEffect, useContext } from 'react'
import BlogList from './BlogList'
import BlogForm from './BlogForm'
import { ThemeProvider, ThemeContext } from './ThemeContext'
import useLocalStorage from '../hooks/useLocalStorage'

function BlogApp() {
    const [posts, setPosts] = useLocalStorage('task1-posts', [])
    const [selectedTitle, setSelectedTitle] = useState('')

    useEffect(() => {
        document.title = selectedTitle || 'React Day 15 Tasks'
    }, [selectedTitle])

    const addPost = (title, content) => {
        setPosts([...posts, { title, content }])
    }

    return (
        <ThemeProvider>
            <ThemeWrapper posts={posts} addPost={addPost} setSelectedTitle={setSelectedTitle} />
        </ThemeProvider>
    )
}

function ThemeWrapper({ posts, addPost, setSelectedTitle }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`task1-blog-container task1-${theme}`}>
            <BlogForm addPost={addPost} />
            <BlogList posts={posts} setSelectedTitle={setSelectedTitle} />
        </div>
    )
}

export default BlogApp
