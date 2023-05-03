// npm modules
import { useLocation } from 'react-router-dom'

// components


// services


// styles
import styles from './PropertyDetail.module.css'

// component


export default function PropertyDetail() {
  const location = useLocation()
  const property = location.state
  return (
    <main className={styles.container}>
      <h1>{property.address}</h1>
      <div className={styles.imageContainer}>
        {property.photos.map((photo, idx) =>
          <img src={photo} alt={`${property.address} ${idx}`} />
        )}
      </div>
      <p>{property.description}</p>
    </main>
  )
}
