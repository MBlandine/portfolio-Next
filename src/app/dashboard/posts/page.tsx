"use client"

import api from '@/lib/api';
import Link from "next/link"
import { useEffect, useState } from "react"
import '@/index.css';

type Post = {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
};

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchRecords = async () => {
        try {
            setLoading(true)
            const response = await api.get('/posts')
            setPosts(response.data)
            setError(null)
        } catch (err: any) {
            setError(err.response?.data?.error || 'Failed to fetch posts')
            console.error('Error fetching posts:', err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRecords()
    }, [])

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this post?')) {
            return;
        }

        try {
            // Use consistent API endpoint pattern
            await api.delete(`/posts/${id}`)
            const filterData = posts.filter((post) => post.id !== id)
            setPosts(filterData)
        } catch (err: any) {
            setError(err.response?.data?.error || 'Failed to delete post')
            console.error('Error deleting post:', err)
        }
    }

    // Show loading state
    if (loading) {
        return (
            <div className="blog-postspage">
                <div className="blog-posts1">
                    <h1 className="text-3xl font-bold">Blog Posts</h1>
                </div>
                <p>Loading posts...</p>
            </div>
        )
    }

    // Show error state
    if (error) {
        return (
            <div className="blog-postspage">
                <div className="blog-posts1">
                    <h1 className="text-3xl font-bold">Blog Posts</h1>
                </div>
                <div className="error-message">
                    <p>Error: {error}</p>
                    <button onClick={fetchRecords} className="btn btn-secondary">
                        Retry
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="blog-postspage">
            <div className="blog-posts1">
                <h1 className="text-3xl font-bold">Blog Posts</h1>
                <Link href="/dashboard/posts/create" className="btn btn-primary">
                    Create New Post
                </Link>
            </div>
            
            {posts.length === 0 ? (
                <div className="no-posts">
                    <p>No posts found.</p>
                    <Link href="/dashboard/posts/create" className="btn btn-primary">
                        Create Your First Post
                    </Link>
                </div>
            ) : (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Content Preview</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) => (
                                <tr key={post.id}>
                                    <td>{index + 1}</td>
                                    <td>{post.title}</td>
                                    <td>
                                        {post.body && post.body.length > 100 
                                            ? `${post.body.substring(0, 100)}...` 
                                            : post.body || "No content"
                                        }
                                    </td>
                                    <td>{new Date(post.created_at).toLocaleDateString()}</td>
                                    <td className="actions-cell">
                                        <Link href={`/dashboard/posts/${post.id}?mode=read`}>
                                            <button type="button" className="btn-red1">
                                                Read
                                            </button>
                                        </Link>
                                        <Link href={`/dashboard/posts/${post.id}?mode=edit`}>
                                            <button type="button" className="btn-red2">
                                                Edit
                                            </button>
                                        </Link>
                                        <button 
                                            type="button" 
                                            onClick={() => handleDelete(post.id)} 
                                            className="btn-red1"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}