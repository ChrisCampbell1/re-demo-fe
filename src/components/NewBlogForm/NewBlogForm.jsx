// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as authService from '../../services/authService'

// styles
import styles from './NewBlogForm.module.css'

// component


export default function NewBlogForm() {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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


      </div>
      <div className={styles.inputContainer}>


      </div>
    </form>
  )
}
