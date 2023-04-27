// npm modules
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// components
import Tag from '../Tag/Tag'

// services
import * as authService from '../../services/authService'

// styles
import styles from './NewBlogForm.module.css'

// component


export default function NewBlogForm() {
  const [formData, setFormData] = useState({
    title: '',
    tags: [],
    body: '',
  })

  const [tag, setTag] = useState('')

  const [photoData, setPhotoData] = useState({})

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChangePhoto = (e) => {
    setPhotoData({ photo: e.target.files[0] })
  }

  const handleChangeTag = (e) => {
    setTag(e.target.value)
  }

  const handleAddTag = (e) => {
    setFormData({ ...formData, tags: [...formData.tags, tag] })
    setTag('')
  }

  const handleRemoveTag = (tagName) => {
    const updatedTags = formData.tags.filter((tag) => tag !== tagName)
    setFormData({ ...formData, tags: updatedTags })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      
    } catch (err) {
      
    }
  }
  
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="title">Title</label>
        <input 
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={styles.tags}>
        {formData.tags.map((tag, idx) =>
          <Tag key={idx} tag={tag} handleRemoveTag={handleRemoveTag}/>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={tag}
          onChange={handleChangeTag}
        />
        <button onClick={() => handleAddTag()}>Add Tag</button>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="photo-upload" className={styles.label}>
          Upload Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />
      </div>
    </form>
  )
}
