import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddPost from './components/AddPost';
import AllPosts from './components/AllPosts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Navigate to="/add-post" replace />} />
            <Route path="add-post" element={<AddPost />} />
            <Route path="all-posts" element={<AllPosts />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
