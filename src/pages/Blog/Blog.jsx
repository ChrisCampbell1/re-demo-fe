// npm modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

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
      <Helmet>
        <title>Real Estate Blog</title>
        <link rel="canonical" href="/blog" />
        <meta name='description' content="Find the latest Denver real estate information here. I post about market trends and tips for buyers and sellers."/>
        <meta property='og:title' content='Real Estate Blog'/>
        <meta property='og:description' content='Find the latest Denver real estate information here. I post about market trends and tips for buyers and sellers.'/>        
      </Helmet>
      <h1>Blog</h1>
      {blogs ?
        blogs.map((blog) =>
        <BlogArticle blog={blog} key={blog._id} user={user} handleDeleteClick={handleDeleteClick}/>
        )
      :
        <>
        <h1>Loading Posts...</h1>
        </>
      }
    </main>
  )
}
