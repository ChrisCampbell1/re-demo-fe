// npm modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services


// styles
import styles from './ContactForm.module.css'

// component


export default function ContactForm({ property }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: property? `${property.address}` : '',
    message: '',
  })

  console.log(property)

  const navigate = useNavigate()

  // useEffect(() => {
  //   const setSubject = () => {
  //     if(property !== null) {
  //       setFormData({ ...formData, subject: `${property.address}` })
  //     }
  //   }
  //   setSubject()
  // }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    // await reviewService.createReview(formData)
    // navigate('/reviews')
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          minLength="10"
          // maxLength="10"
          name="phone"
          id="phone"
          onChange={handleChange}
        />
      <div className={styles.inputContainer}>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          onChange={handleChange}
          value={formData.subject}
        />
      </div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          onChange={handleChange}
        ></textarea>
      </div>
      <button>Send</button>
    </form>
  )
}
