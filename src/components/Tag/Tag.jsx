// npm modules


// components


// services


// styles
import styles from './Tag.module.css'

// component


export default function Tag({ tag, handleRemoveTag }) {
  return (
    <div className={styles.container}>
      <p>{tag}</p>
      <button type="button" onClick={() => handleRemoveTag(tag)}>X</button>
    </div>
  )
}
