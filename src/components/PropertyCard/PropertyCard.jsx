// npm modules
import { Link } from 'react-router-dom'

// components


// services


// styles
import styles from './PropertyCard.module.css'

// component


export default function PropertyCard({ property, user, handleDeleteClick }) {
  return (
    <div className={styles.container}>
      <h3>{property.address}</h3>
      <img src={property.photos[0]} alt={property.address} />
      {user &&
      <div className={styles.buttons}>
        <Link to={`/listing/edit/${property._id}`} state={property}>Edit Listing</Link>
      <button
        type='button'
        onClick={() => handleDeleteClick(property._id)}
      >
        Delete Listing
      </button>
      </div>
      }
    </div>
  )
}
