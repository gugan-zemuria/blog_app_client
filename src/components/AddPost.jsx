import { useState } from 'react';
import axios from 'axios';
import config from '../config';

function AddPost() {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    user_id: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const createPost = async (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim() || !newPost.user_id) {
      setError('Title, content, and user ID are required');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const postData = {
        ...newPost,
        user_id: parseInt(newPost.user_id)
      };
      await axios.post(`${config.API_URL}/api/posts`, postData);
      setNewPost({ title: '', content: '', user_id: '' });
      setSuccess('Post created Successfully!');
      setTimeout(() => {
        setSuccess('')
      }, 2000);
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Failed to create post');
      setTimeout(() => {
        setError('')
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-post">
      <h2>Create New Post</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
        </div>
        
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}

export default AddPost;