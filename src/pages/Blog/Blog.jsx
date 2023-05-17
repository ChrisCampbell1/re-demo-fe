// npm modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// components
import BlogArticle from '../../components/BlogArticle/BlogArticle'

// services
import * as blogService from '../../services/blogService'


// styles
import styles from './Blog.module.css'

// component


export default function Blog({ user }) {
  const navigate = useNavigate()
  
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const fetchBlogs = async() => {
      const blogs = await blogService.getAllBlogs()
      setBlogs(blogs)
    }
    fetchBlogs()
  }, [])

  const handleDeleteClick = async(id) => {
    const deletedBlog = await blogService.deleteBlog(id)
    const updatedBlogs = blogs.filter((blog) => blog._id !== deletedBlog._id)
    setBlogs(updatedBlogs)
    navigate(`/blog`)
  }
  
  return (
    <main className={styles.container}>
      <h1>Blog</h1>
      {blogs ?
        blogs.map((blog) =>
        <BlogArticle blog={blog} key={blog._id} user={user} handleDeleteClick={handleDeleteClick}/>
        )
      :
        <>
        <h3>Loading Posts...</h3>
        </>
      }
    </main>
  )
}
