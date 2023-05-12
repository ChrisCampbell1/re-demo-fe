// npm modules
import { useState } from 'react'

// components
import NewBlogForm from '../../components/NewBlogForm/NewBlogForm'
import NewPropertyForm from '../../components/NewPropertyForm/NewPropertyForm'
import NewReviewForm from '../../components/NewReviewForm/NewReviewForm'
import NewNeighborhoodForm from '../../components/NewNeighborhoodForm/NewNeighborhoodForm'

// services


// styles
import styles from './Dashboard.module.css'

// component


export default function Dashboard() {
  const [blog, setBlog] = useState(false)
  const [property, setProperty] = useState(false)
  const [review, setReview] = useState(false)
  const [neighborhood, setNeighborhood] = useState(false)
  
  const handleBlogClick = () => {
    setBlog(!blog)
    setProperty(false)
    setReview(false)
    setNeighborhood(false)
  }

  const handlePropertyClick = () => {
    setBlog(false)
    setProperty(!property)
    setReview(false)
    setNeighborhood(false)
  }

  const handleReviewClick = () => {
    setBlog(false)
    setProperty(false)
    setReview(!review)
    setNeighborhood(false)
  }

  const handleNeighborhoodClick = () => {
    setBlog(false)
    setProperty(false)
    setReview(false)
    setNeighborhood(!neighborhood)
  }
  
  return (
    <main className={styles.container}>
      <h1>Dashboard</h1>
      <h2 onClick={() => handleBlogClick()}>New Blog Post</h2>
      {blog &&
        <NewBlogForm />
      }
      <h2 onClick={() => handlePropertyClick()}>New Listing Entry</h2>
      {property &&
        <NewPropertyForm />
      }
      <h2 onClick={() => handleReviewClick()}>New Review Entry</h2>
      {review &&
        <NewReviewForm />
      }
      <h2 onClick={() => handleNeighborhoodClick()}>New Neighborhood Page</h2>
      {neighborhood &&
        <NewNeighborhoodForm />
      }
    </main>
  )
}
