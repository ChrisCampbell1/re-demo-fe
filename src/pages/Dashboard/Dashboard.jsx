// npm modules
import { useState } from 'react'

// components
import NewBlogForm from '../../components/NewBlogForm/NewBlogForm'
import NewPropertyForm from '../../components/NewPropertyForm/NewPropertyForm'
import NewReviewForm from '../../components/NewReviewForm/NewReviewForm'

// services


// styles
import styles from './Dashboard.module.css'

// component


export default function Dashboard() {
  const [blog, setBlog] = useState(false)
  const [property, setProperty] = useState(false)
  const [review, setReview] = useState(false)
  
  const handleBlogClick = () => {
    setBlog(!blog)
    setProperty(false)
    setReview(false)
  }

  const handlePropertyClick = () => {
    setBlog(false)
    setProperty(!property)
    setReview(false)
  }

  const handleReviewClick = () => {
    setBlog(false)
    setProperty(false)
    setReview(!review)
  }
  
  return (
    <main className={styles.container}>
      <h1>Dashboard</h1>
      <h2 onClick={() => handleBlogClick()}>New Blog Entry {blog? "▲" : "▼"}</h2>
      {blog &&
        <NewBlogForm />
      }
      <h2 onClick={() => handlePropertyClick()}>New Property Entry {property? "▲" : "▼"}</h2>
      {property &&
        <NewPropertyForm />
      }
      <h2 onClick={() => handleReviewClick()}>New Review Entry {review? "▲" : "▼"}</h2>
      {review &&
        <NewReviewForm />
      }
    </main>
  )
}
