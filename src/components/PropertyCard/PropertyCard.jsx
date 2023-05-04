// npm modules
import { Link } from 'react-router-dom'

// components


// services


// styles
import styles from './PropertyCard.module.css'

// component


export default function PropertyCard({ property, user, handleDeleteClick }) {
  
  return (
      <Link to={`/listing/${property._id}`} state={property} style={{ textDecoration: 'none' }}>
        <div className={styles.container}>
          <div className={styles.bg}>
            <img src={property.photos[0]} alt={property.address} />
          </div>
          <div className={styles.overlay}>
            {property.status === 'Active' &&
              <h3 className={styles.active}>{property.status}</h3>
            }
            {property.status === 'Pending' &&
              <h3 className={styles.pending}>{property.status}</h3>
            }
            {property.status === 'Closed' &&
              <h3 className={styles.closed}>{property.status}</h3>
            }
          </div>
          <div className={styles.price}>
            <h2>${property.price.toLocaleString()}</h2>
          </div>
          <div className={styles.info}>
            <div className={styles.stats}>
              <h3>{property.address}</h3>
              <p>Beds: {property.beds} | Baths: {property.baths} | Square Feet: {property.squareFeet}</p>
              <p>Represented the {property.type.toLowerCase()}</p>
              <p>Listed by {property.listingBrokerage}</p>
            </div>
            <div className={styles.contact}>
              <Link to={`/contact`}>Request Info</Link>
            </div>
          </div>
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
      </Link>
  )
}
