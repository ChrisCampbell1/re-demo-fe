// npm modules
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'


// components
import BlogArticle from '../../components/BlogArticle/BlogArticle'


// services
import * as blogService from '../../services/blogService'


// styles
import styles from './BlogDetail.module.css'

// component


export default function BlogDetail({ user }) {
  const location = useLocation()
  // const blog = location.state
  const slug = location.pathname.slice(6)
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const getBlog = async (slug) => {
      const blog = await blogService.getBlog(slug)
      setBlog(blog[0])
    }
    getBlog(slug)
  }, [location])

  if (blog) {
    return (
      <main className={styles.container}>
        <Helmet>
          <title>{blog.title}</title>
          <link rel="canonical" href={`/blog/${slug}`} />
          <meta name='description' content={blog.body.slice(3,170)} />
          <meta property='og:title' content={blog.title} />
          <meta property='og:description' content={blog.body.slice(3,170)} />
          <meta property='og:image' content={blog.photo}/>
        </Helmet>
        <title>{blog.title}</title>
        <Link to={`/blog`}>
          <h4 className={styles.more}>More Articles</h4>
        </Link>
        <BlogArticle blog={blog} user={user} />
      </main>
    )
  } else {
    return (
      <main className={styles.container}>
        <h1>Loading...</h1>
      </main>
    )
  }
}
