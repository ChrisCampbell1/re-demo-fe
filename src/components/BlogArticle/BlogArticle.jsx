// npm modules
import { Link } from 'react-router-dom'

// components
import BlogTag from '../BlogTag/BlogTag'

// services


// styles
import styles from './BlogArticle.module.css'

// component


export default function BlogArticle({ blog, user, handleDeleteClick }) {
  const markup = { __html: blog.body }
  
  return (
    <article className={styles.container}>
      <title>{blog.title}</title>
      <h3>{blog.title}</h3>
      <img src={blog.photo} alt="" />
      <div className="tagContainer">
        {blog.tags.map((tag, idx) =>
          <BlogTag tag={tag} key={idx}/>
        )}
      </div>
      {/* {blog.body} */}
      <div dangerouslySetInnerHTML={markup}></div>
      <div className={styles.buttons}>
        <Link to={`/blog/edit/${blog._id}`} state={blog}>Edit Post</Link>
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
