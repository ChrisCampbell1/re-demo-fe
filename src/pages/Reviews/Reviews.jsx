// npm modules
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'


// components
import ReviewCard from '../../components/ReviewCard/ReviewCard'

// services
import * as reviewService from '../../services/reviewService'

// styles
import styles from './Reviews.module.css'

// component


export default function Reviews({ user }) {
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    const fetchReviews = async() => {
      const reviews = await reviewService.getAllReviews()
      setReviews(reviews)
    }
    fetchReviews()
  }, [])

  const handleDeleteClick = async(id) => {
    const deletedReview = await reviewService.deleteReview(id)
    const updatedReviews = reviews.filter((review) => review._id !== deletedReview._id)
    setReviews(updatedReviews)
  }
  
  return (
    <main className={styles.container}>
      <h1>Reviews</h1>
      <Helmet>
        <title>Reviews</title>
        <link rel="canonical" href={`/reviews`} />
        <meta name='description' content="Learn what people are saying about working with me as their Realtor" />
        <meta property='og:title' content="Reviews" />
        <meta property='og:description' content="Learn what people are saying about working with me as their Realtor" />
      </Helmet>
      {reviews ?
        reviews.map((review) => 
          <ReviewCard key={review._id} review={review} user={user} handleDeleteClick={handleDeleteClick}/>
        )
      :
        <>
        <h3>Loading Reviews...</h3>
        </>
      }
    </main>
  )
}
