// npm modules
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

// components


// services
import * as propertyService from '../../services/propertyService'


// styles
import styles from './PropertyDetail.module.css'

// component


export default function PropertyDetail({ user }) {
  const navigate = useNavigate()
  
  const location = useLocation()
  const property = location.state

  const [image, setImage] = useState(0)

  const handleImageClick = (e) => {
    console.log(e)
    setImage(e.target.id)
  }

  const handleDeleteClick = async(id) => {
    await propertyService.deleteProperty(id)
    navigate(`/listings`)
  }

  return (
    <main className={styles.container}>
      <div className={styles.listing}>
        <h1>{property.address} - {property.status}</h1>
        <h2>${property.price.toLocaleString()}</h2>
        <Link to={`/listings`}>
          <h4>All Listings</h4>
        </Link>
        <img src={property.photos[image]} alt={`${property.address}`} id={styles.mainPhoto} />
        <div className={styles.thumbnailContainer}>
          {property.photos.map((photo, idx) =>
            <img src={photo} alt={`${property.address} ${idx}`} key={idx} id={idx} onClick={handleImageClick} />
          )}
        </div>
            <p>Beds: {property.beds} | Baths: {property.baths} | Square Feet: {property.squareFeet}</p>
            <Link to={`/contact`} className={styles.contactBtn}>Request Info</Link>
        <p>{property.description}</p>
        <p>Listed by {property.listingBrokerage}</p>
        {user &&
          <div className={styles.buttons}>
            <Link className={styles.btn} to={`/listing/edit/${property._id}`} state={property}>Edit Listing</Link>
            <button
              type='button'
              className={styles.delete}
              onClick={() => handleDeleteClick(property._id)}
            >
              Delete Listing
            </button>
          </div>
        }
      </div>
    </main>
  )
}
