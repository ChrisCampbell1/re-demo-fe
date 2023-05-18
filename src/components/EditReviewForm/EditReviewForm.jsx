// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as reviewService from '../../services/reviewService'

// styles
import styles from './EditReviewForm.module.css'

// component


export default function EditReviewForm({ review }) {
  const [formData, setFormData] = useState({
    review: review.review,
    client: review.client
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const updatedReview = await reviewService.updateReview(review._id ,formData)
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
          rows="10"
          onChange={handleChange}
          value={formData.review}
          required
        ></textarea>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="client">Client Name</label>
        <input
          type="text"
          name="client"
          id="client"
          onChange={handleChange}
          value={formData.client}
          required
        />
      </div>
      <button>Save Review</button>
    </form>
  )
}
