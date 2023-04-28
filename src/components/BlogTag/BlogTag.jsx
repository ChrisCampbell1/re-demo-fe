// npm modules


// components


// services


// styles
import styles from './BlogTag.module.css'

// component


export default function BlogTag({ tag }) {
  return (
    <div className={styles.container}>
      <p>#{tag}</p>
    </div>
  )
}
