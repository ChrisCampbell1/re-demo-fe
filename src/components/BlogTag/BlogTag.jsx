// npm modules
import { Link } from 'react-router-dom'

// components


// services


// styles
import styles from './BlogTag.module.css'

// component


export default function BlogTag({ tag }) {
  return (
    <div className={styles.container}>
      {/* <p>#{tag}</p> */}
      <Link to={`/blog/category/${tag}`} state={tag}>#{tag}</Link>
    </div>
  )
}
