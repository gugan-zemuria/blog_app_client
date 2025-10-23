import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Test with JSX
function TestApp() {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: 'green', 
      color: 'white',
      minHeight: '100vh',
      fontSize: '24px'
    }}>
      <h1>React + JSX Working!</h1>
      <p>If you see this, JSX and CSS imports are working.</p>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<TestApp />)
