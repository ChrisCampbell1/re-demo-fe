// npm modules
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'


// components
import BlogArticle from '../../components/BlogArticle/BlogArticle'

// services
import * as blogService from '../../services/blogService'


// styles
import styles from './BlogCategory.module.css'

// component


export default function BlogCategory({ user }) {
  const location = useLocation()
  const category = location.state

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await blogService.getBlogsByCategory(category)
      setBlogs(blogs)
    }
    fetchBlogs()
  }, [category])

  const handleDeleteClick = async (id) => {
    const deletedBlog = await blogService.deleteBlog(id)
    const updatedBlogs = blogs.filter((blog) => blog._id !== deletedBlog._id)
    setBlogs(updatedBlogs)
  }

  return (
    <main className={styles.container}>
      <Helmet>
        <title>{category}</title>
        <link rel="canonical" href={`/blog/category/${category}`} />
        <meta name='description' content={`Denver real estate learn more about ${category}`} />
        <meta property='og:title' content={category} />
        <meta property='og:description' content={`Denver real estate learn more about ${category}`} />
      </Helmet>
      <h1>#{category}</h1>
      <Link to={`/blog`}>
        <h4 className={styles.more}>All Articles</h4>
      </Link>
      {blogs.map((blog) =>
        <BlogArticle blog={blog} key={blog._id} user={user} handleDeleteClick={handleDeleteClick} />
      )}
    </main>
  )
}
