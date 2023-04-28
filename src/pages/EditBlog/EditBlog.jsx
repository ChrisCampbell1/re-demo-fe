// npm modules
import { useLocation } from 'react-router-dom'

// components
import EditBlogForm from '../../components/EditBlogForm/EditBlogForm'

// services


// styles
import styles from './EditBlog.module.css'

// component


export default function EditBlog() {
  const location = useLocation()
  const blog = location.state
  console.log(blog)
  
  return (
    <main className={styles.container}>
      <h1>Edit Blog</h1>
      <EditBlogForm blog={blog}/>
    </main>
  )
}
