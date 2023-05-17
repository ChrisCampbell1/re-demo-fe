// npm modules
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
  console.log(slug)
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const getBlog = async (slug) => {
      const blog = await blogService.getBlog(slug)
      setBlog(blog[0])
    }
    getBlog(slug)
  },[location])
  
  if(blog){
    return (
      <main className={styles.container}>
        <title>{blog.title}</title>
        <Link to={`/blog`}>
          <h4 className={styles.more}>More Articles</h4>
        </Link>
        <BlogArticle blog={blog} user={user}/>
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
