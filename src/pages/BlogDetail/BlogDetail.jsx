// npm modules
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

// components
import BlogArticle from '../../components/BlogArticle/BlogArticle'


// services


// styles
import styles from './BlogDetail.module.css'

// component


export default function BlogDetail() {
  const location = useLocation()
  const blog = location.state
  
  return (
    <main className={styles.container}>
      <h1>{blog.title}</h1>
      <Link to={`/blog`}>
        <h4>More Articles</h4>
      </Link>
      <BlogArticle blog={blog}/>
    </main>
  )
}
