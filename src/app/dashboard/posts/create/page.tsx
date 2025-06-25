"use client";

import React, { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import "@/index.css";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await api.post("/posts", { title, body: content });
      router.push("/dashboard/posts");
    } catch (err: any) {
      if (err.response?.status !== 401) {
        setError(err.response?.data?.error || 'Failed to create post');
        console.error('Error creating post:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/dashboard/posts");
  };

  return (
    <div className="create-post-page">
      <div className="page-header">
        <h1>Create New Post</h1>
        <button onClick={handleCancel} className="btn btn-secondary">
          Back to Posts
        </button>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Write your post content here..."
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="form-actions">
          <button 
            className="btn btn-primary" 
            type="submit" 
            disabled={loading || !title.trim() || !content.trim()}
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>
          <button 
            type="button" 
            onClick={handleCancel} 
            className="btn btn-secondary"
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}