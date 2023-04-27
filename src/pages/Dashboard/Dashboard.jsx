// npm modules


// components
import NewBlogForm from '../../components/NewBlogForm/NewBlogForm'
import NewPropertyForm from '../../components/NewPropertyForm/NewPropertyForm'
import NewReviewForm from '../../components/NewReviewForm/NewReviewForm'

// services


// styles
import styles from './Dashboard.module.css'

// component


export default function Dashboard() {
  return (
    <main className={styles.container}>
      <h1>Dashboard</h1>
      <h3>New Blog Entry</h3>
      <NewBlogForm />
      <h3>New Property Entry</h3>
      <NewPropertyForm />
      <h3>New Review Entry</h3>
      <NewReviewForm />
    </main>
  )
}
