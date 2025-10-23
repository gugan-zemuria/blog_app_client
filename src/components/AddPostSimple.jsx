import { useState } from 'react';

function AddPostSimple() {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    user_id: ''
  });

  const createPost = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', newPost);
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="add-post">
      <h2>Create New Post (Simple Version)</h2>
      
      <form onSubmit={createPost} className="post-form">
        <div className="form-group">
          <label htmlFor="user_id">User ID:</label>
          <input
            id="user_id"
            type="number"
            placeholder="Enter user ID"
            value={newPost.user_id}
            onChange={(e) => setNewPost({...newPost, user_id: e.target.value})}
            min="1"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Enter post title"
            value={newPost.title}
            onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            placeholder="Enter post content"
            value={newPost.content}
            onChange={(e) => setNewPost({...newPost, content: e.target.value})}
            rows="6"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Create Post (No API Call)
        </button>
      </form>
    </div>
  );
}

export default AddPostSimple;