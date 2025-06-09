import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function BlogList({ posts, setSelectedTitle }) {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <div className="task1-blog-list">
            <button className="task1-button" onClick={toggleTheme}>
                Toggle Theme
            </button>
            {posts.map((post, index) => (
                <div
                    className="task1-post"
                    key={index}
                    onClick={() => setSelectedTitle(post.title)}
                >
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}


export default BlogList
