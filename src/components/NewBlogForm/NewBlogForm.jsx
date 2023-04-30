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

  const [photoData, setPhotoData] = useState({})

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
    setFormData({ ...formData, tags: [...formData.tags, tag] })
    setTag('')
  }

  const handleRemoveTag = (tagName) => {
    const updatedTags = formData.tags.filter((tag) => tag !== tagName)
    setFormData({ ...formData, tags: updatedTags })
  }

  const handleSubmit = async(e) => {
    console.log(convertedText)
    console.log(typeof convertedText)
    // setFormData({ ...formData, body: convertedText })
    formData.body = convertedText
    console.log(formData)
    e.preventDefault()
    const blog = await blogService.createBlog(formData)
    await blogService.addPhoto(photoData, blog._id)
    navigate('/blog')
  }
  
  //react quill test

  const [convertedText, setConvertedText] = useState("Some default content")

  // console.log(convertedText)

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
      {/* <div className={styles.inputContainer}>
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </div> */}
      <div>
        <ReactQuill
          theme='snow'
          value={convertedText}
          onChange={setConvertedText}
          // onChange={handleBodyChange}
          style={{minHeight: '200px'}}
        />
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
        <button
          onClick={() => handleAddTag()}
          type='button'
        >
          Add Tag</button>
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
      <button>Publish</button>

    </form>
  )
}
