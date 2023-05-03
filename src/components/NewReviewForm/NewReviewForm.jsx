// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as reviewService from '../../services/reviewService'

// styles
import styles from './NewReviewForm.module.css'

// component


export default function NewReviewForm() {
  const [formData, setFormData] = useState({
    review: '',
    name: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await reviewService.createReview(formData)
    navigate('/reviews')
  }
  
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="review">Review</label>
        <textarea
          name="review"
          id="review"
          cols="30"
          rows="6"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="client">Client Name</label>
        <input
          type="text"
          name="client"
          id="client"
          onChange={handleChange}
        />
      </div>
      <button>Save Review</button>
    </form>
  )
}
