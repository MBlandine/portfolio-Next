'use client';

import React, { useState, useEffect } from 'react';
import api from '@/lib/api';
import { useRouter, useParams, useSearchParams } from 'next/navigation';

type Post = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};

export default function PostPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const id = params?.id;
  const mode = searchParams.get('mode'); // "edit" or "read"

  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editing, setEditing] = useState(mode === 'edit');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Fetch the post when `id` changes
  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        setInitialLoading(true);
        const response = await api.get(`/posts/${id}`);
        const data = response.data;
        setPost(data);
        setTitle(data.title);
        setContent(data.body);
        setError(null);
      } catch (error: any) {
        setError(error.response?.data?.error || 'Error fetching post');
        console.error('Error fetching post:', error);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Update editing mode when query param changes
  useEffect(() => {
    setEditing(mode === 'edit');
  }, [mode]);

  // Submit edited post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    setLoading(true);
    setError(null);

    try {
      // Use consistent API endpoint pattern
      await api.put(`/posts/${id}`, { title, body: content });
      setEditing(false);
      // Refresh the post data
      const response = await api.get(`/posts/${id}`);
      setPost(response.data);
      setTitle(response.data.title);
      setContent(response.data.body);
    } catch (error: any) {
      setError(error.response?.data?.error || 'Error updating post');
      console.error('Error updating post:', error);
    } finally {
      setLoading(false);
    }
  };

  // Delete post
  const handleDelete = async () => {
    if (!id) return;
    
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      setLoading(true);
      await api.delete(`/posts/${id}`);
      router.push('/dashboard/posts');
    } catch (error: any) {
      setError(error.response?.data?.error || 'Error deleting post');
      console.error('Error deleting post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (post) {
      setTitle(post.title);
      setContent(post.body);
    }
    setEditing(false);
    setError(null);
  };

  if (initialLoading) {
    return (
      <div className="post-page">
        <p>Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="post-page">
        <div className="error-message">Post not found</div>
        <button onClick={() => router.push('/dashboard/posts')} className="btn btn-secondary">
          Back to Posts
        </button>
      </div>
    );
  }

  return (
    <div className="post-page">
      {error && <div className="error-message">{error}</div>}
      
      {editing ? (
        <form className="form-group" onSubmit={handleSubmit}>
          <h2>Edit Post</h2>
          <div className="form-group">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={10}
              required
              disabled={loading}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            <button type="button" onClick={handleCancel} className="btn btn-secondary" disabled={loading}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="post-content">
          <h1>{post.title}</h1>
          <div className="post-body">
            {post.body.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="post-meta">
            <p><small>Created: {new Date(post.created_at).toLocaleDateString()}</small></p>
            <p><small>Updated: {new Date(post.updated_at).toLocaleDateString()}</small></p>
          </div>
        </div>
      )}

      <div className="action-buttons">
        <button onClick={() => router.push('/dashboard/posts')} className="btn btn-secondary">
          Back to Posts
        </button>
        {!editing && (
          <button onClick={() => setEditing(true)} className="btn btn-primary">
            Edit Post
          </button>
        )}
        <button onClick={handleDelete} className="btn btn-danger" disabled={loading}>
          {loading ? 'Deleting...' : 'Delete Post'}
        </button>
      </div>
    </div>
  );
}