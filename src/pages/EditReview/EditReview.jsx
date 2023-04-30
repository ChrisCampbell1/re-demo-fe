// npm modules
import { useLocation } from 'react-router-dom'

// components
import EditReviewForm from '../../components/EditReviewForm/EditReviewForm'

// services


// styles
import styles from './EditReview.module.css'

// component


export default function EditReview() {
  const location = useLocation()
  const review = location.state
  
  return (
    <main className={styles.container}>
      <h1>Edit Review</h1>
      <EditReviewForm review={review}/>
    </main>
  )
}
