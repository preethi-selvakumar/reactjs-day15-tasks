import React, { useState } from 'react'
import BlogApp from './task 1/components/BlogApp'
import TodoApp from './task 2/components/TodoApp'
import WeatherApp from './task 3/components/WeatherApp'
import UserApp from './task 4/components/UserApp'
import ProductApp from './task 5/components/ProductApp'

const App = () => {
  const [activeTab, setActiveTab] = useState('blog')

  const renderComponent = () => {
    switch (activeTab) {
      case 'blog':
        return <BlogApp />
      case 'todo':
        return <TodoApp />
      case 'weather':
        return <WeatherApp />
      case 'user':
        return <UserApp />
      case 'product':
        return <ProductApp />
      default:
        return null
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>ReactJs Day 15 Tasks</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {['blog', 'todo', 'weather', 'user', 'product'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              backgroundColor: activeTab === tab ? '#007bff' : '#f0f0f0',
              color: activeTab === tab ? '#fff' : '#000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px' }}>
        {renderComponent()}
      </div>
    </div>
  )
}

export default App
