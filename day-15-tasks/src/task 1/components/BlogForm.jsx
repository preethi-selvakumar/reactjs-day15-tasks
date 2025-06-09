import React, { useState } from 'react'

function BlogForm({ addPost }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!title || !content) return
        addPost(title, content)
        setTitle('')
        setContent('')
    }

    return (
        <form className="task1-blog-form" onSubmit={handleSubmit}>
            <input
                className="task1-input"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                className="task1-textarea"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Content"
            />
            <button className="task1-button" type="submit">Add Post</button>
        </form>
    )
}

export default BlogForm
