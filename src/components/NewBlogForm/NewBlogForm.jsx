// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'

// components
import Tag from '../Tag/Tag'

// services
import * as blogService from '../../services/blogService'

// styles
import styles from './NewBlogForm.module.css'
import 'react-quill/dist/quill.snow.css'

// component


export default function NewBlogForm() {
  const [formData, setFormData] = useState({
    title: '',
    tags: [],
    body: '',
  })

  const [tag, setTag] = useState('')

  const [photoData, setPhotoData] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleChangePhoto = (e) => {
    setPhotoData(e.target.files[0])
  }

  const handleChangeTag = (e) => {
    const tag = e.target.value
    const slug = tag.replace(/\s/g, "")
    setTag(slug)
  }

  const handleAddTag = (e) => {
    if (tag !== '') {
      setFormData({ ...formData, tags: [...formData.tags, tag] })
      setTag('')
    }
  }

  const handleRemoveTag = (tagName) => {
    const updatedTags = formData.tags.filter((tag) => tag !== tagName)
    setFormData({ ...formData, tags: updatedTags })
  }

  const handleSubmit = async (e) => {
    console.log(convertedText)
    console.log(typeof convertedText)
    formData.body = convertedText
    console.log(formData)
    e.preventDefault()
    const blog = await blogService.createBlog(formData)
    await blogService.addPhoto(photoData, blog._id)
    navigate('/blog')
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    } else return
  }

  //react quill test

  const [convertedText, setConvertedText] = useState("Type blog entry here. This editor will expand as you type.")


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
        <label htmlFor="quill">Blog Entry</label>
        <ReactQuill
          theme='snow'
          value={convertedText}
          onChange={setConvertedText}
          // style={{
          //   minHeight: '100px',
          //   borderRadius: '.25rem',
          // }}
          id="quill"
          className={styles.quill}
        />
      </div>
      <div className={styles.tags}>
        {formData.tags.map((tag, idx) =>
          <Tag key={idx} tag={tag} handleRemoveTag={handleRemoveTag} />
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="No spaces, you can add multiple tags."
          value={tag}
          onChange={handleChangeTag}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => handleAddTag()}
          type='button'
          className={styles.btn}
        >
          Add Tag</button>
      </div>
      <div className={styles.inputContainerUpload}>
        {photoData ?
          <label htmlFor="photo-upload">Image Selected</label>
          :
          <label htmlFor="photo-upload">Upload Image</label>
        }
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
          accept="image/*"
        />
      </div>
      <button className={styles.btn}>Publish</button>

    </form>
  )
}
