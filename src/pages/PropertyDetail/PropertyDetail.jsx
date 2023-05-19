// npm modules
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'


// components


// services
import * as propertyService from '../../services/propertyService'


// styles
import styles from './PropertyDetail.module.css'

// component


export default function PropertyDetail({ user }) {
  const navigate = useNavigate()

  const location = useLocation()
  const slug = location.pathname.slice(9)

  // const property = location.state
  const [property, setProperty] = useState(null)

  useEffect(() => {
    const getProperty = async (slug) => {
      const property = await propertyService.getProperty(slug)
      setProperty(property[0])
    }
    getProperty(slug)
  }, [location])

  const [image, setImage] = useState(0)

  const handleImageClick = (e) => {
    console.log(e)
    setImage(e.target.id)
  }

  const handleDeleteClick = async (id) => {
    await propertyService.deleteProperty(id)
    navigate(`/listings`)
  }

  if (property) {
    return (
      <main className={styles.container}>
        <Helmet>
          <title>{property.address}</title>
          <link rel="canonical" href={`/listing/${slug}`} />
          <meta name='description' content={property.description.slice(0,170)} />
          <meta property='og:title' content={property.address} />
          <meta property='og:description' content={property.description.slice(0,170)} />
          <meta property='og:image' content={property.photos[0]}/>
        </Helmet>
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
          <Link to={`/contact`} className={styles.contactBtn} state={property}>Request Info</Link>
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
  } else {
    return (
      <main className={styles.container}>
        <h1 className={styles.loading}>Loading...</h1>
      </main>
    )
  }

}
