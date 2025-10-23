import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import './App.css'
import Dashboard from './components/Dashboard'
import AddPostSimple from './components/AddPostSimple'

// Simple test component
function TestAllPosts() {
  return <div style={{ padding: '20px', color: 'blue' }}>All Posts Component Working!</div>
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="/add-post" replace />} />
            <Route path="add-post" element={<AddPostSimple />} />
            <Route path="all-posts" element={<TestAllPosts />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
