// npm modules
import { Link } from 'react-router-dom'

// components


// services


// styles
import styles from './ReviewCard.module.css'

// component


export default function ReviewCard({ review, user, handleDeleteClick }) {
  return (
    <div className={styles.container}>
      <p>{review.review}</p>
      <p className={styles.client}>{review.client}</p>
      {user &&
      <div className={styles.buttons}>
      <Link to={`/review/edit/${review._id}`} state={review}>Edit Review</Link>
      <button
        type='button'
        onClick={() => handleDeleteClick(review._id)}
      >
        Delete Review
      </button>
      </div>
      }
    </div>
  )
}
