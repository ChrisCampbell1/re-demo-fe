// npm modules
import { useLocation } from 'react-router-dom'

// components


// services


// styles
import styles from './NeighborhoodDetail.module.css'

// component


export default function NeighborhoodDetail() {
  const location = useLocation()
  const neighborhood = location.state
  
  return (
    <main className={styles.container}>
      <h1>{neighborhood.name}</h1>
    </main>
  )
}
