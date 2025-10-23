import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <h1>Posts Dashboard</h1>
        <div className="nav-links">
          <Link to="/add-post" className="nav-link">
            Add New Post
          </Link>
          <Link to="/all-posts" className="nav-link">
            All Posts
          </Link>
        </div>
      </nav>
      
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;