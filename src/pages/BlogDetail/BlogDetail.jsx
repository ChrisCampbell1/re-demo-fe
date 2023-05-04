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
      <title>{blog.title}</title>
      <Link to={`/blog`}>
        <h4>More Articles</h4>
      </Link>
      <BlogArticle blog={blog}/>
    </main>
  )
}
