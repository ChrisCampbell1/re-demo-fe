// npm modules
import { Link } from 'react-router-dom'

// components
import BlogTag from '../BlogTag/BlogTag'

// services


// styles
import styles from './BlogArticle.module.css'

// component


export default function BlogArticle({ blog, user, handleDeleteClick }) {
  return (
    <article className={styles.container}>
      <h3>{blog.title}</h3>
      <img src={blog.photo} alt="" />
      <div className="tagContainer">
        {blog.tags.map((tag, idx) =>
          <BlogTag tag={tag} key={idx}/>
        )}
      </div>
      <p>{blog.body}</p>
      <div className="buttons">
        <Link to={`/blog/${blog._id}`}>Edit Post</Link>
        <button
          type='button'
          onClick={() => handleDeleteClick(blog._id)}
        >
          Delete Post
        </button>
      </div>
    </article>
  )
}
