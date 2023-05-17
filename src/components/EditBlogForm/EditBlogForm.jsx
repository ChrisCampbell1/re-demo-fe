// npm modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'

// components
import Tag from '../Tag/Tag'

// services
import * as blogService from '../../services/blogService'

// styles
import styles from './EditBlogForm.module.css'
import 'react-quill/dist/quill.snow.css'

// component


export default function EditBlogForm({ blog }) {
  
  // const [blog, setBlog] = useState({})

  const [slugs, setSlugs] = useState([])
  const [currentSlug, setCurrentSlug] = useState(blog.slug)

  useEffect(() => {
    const fetchSlugs = async () => {
      const blogs = await blogService.getAllBlogs()
      const slugs = []
      blogs.forEach((blog) => {
        slugs.push(blog.slug)
      })
      setSlugs(slugs)
    }
    fetchSlugs()
  }, [])
  
  const [formData, setFormData] = useState({
    title: blog.title,
    tags: blog.tags,
    body: blog.body,
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
    formData.body = convertedText
    e.preventDefault()
    const slug = formData.title.replaceAll(/\s/g, "-")
    if(currentSlug !== slug && slugs.includes(slug)){
      window.alert("A blog post with this title already exists, please select a unique title")
      return
    }
    const updatedBlog = await blogService.updateBlog(blog._id ,formData)
    if(photoData !== null){
      await blogService.addPhoto(photoData, updatedBlog._id)
    }
    navigate('/blog')
  }

  const [convertedText, setConvertedText] = useState(blog.body)

  
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
          value={formData.title}
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
          value={formData.body}
          onChange={handleChange}
        ></textarea>
      </div> */}
      <div className={styles.richText}>
        <ReactQuill
          theme='snow'
          value={convertedText}
          onChange={setConvertedText}
          // onChange={handleBodyChange}
          // style={{minHeight: '200px'}}
          modules={{
            clipboard: {
              matchVisual: false
            }
          }}
        />
      </div>
      {formData.tags && 
        <div className={styles.tags}>
          {formData.tags.map((tag, idx) =>
            <Tag key={idx} tag={tag} handleRemoveTag={handleRemoveTag}/>
          )}
        </div>
      }
      <div className={styles.inputContainer}>
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          placeholder="No spaces, you can add multiple tags."
          value={tag}
          onChange={handleChangeTag}
        />
        <button
          onClick={() => handleAddTag()}
          type='button'
          className={styles.btn}
        >
          Add Tag</button>
        </div>
      <div className={styles.inputContainerUpload}>
        <label htmlFor="photo-upload" className={styles.label}>
          Update Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
          accept="image/*"
        />
      </div>
      <button className={styles.btn}>Update</button>
    </form>
  )
}
