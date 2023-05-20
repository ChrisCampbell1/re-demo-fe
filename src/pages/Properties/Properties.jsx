// npm modules
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'


// components
import PropertyCard from '../../components/PropertyCard/PropertyCard'

// services
import * as propertyService from '../../services/propertyService'


// styles
import styles from './Properties.module.css'

// component


export default function Properties({ user }) {
  const [properties, setProperties] = useState(null)
  
  useEffect(() => {
    const fetchProperties = async() => {
      const properties = await propertyService.getAllProperties()
      setProperties(properties)
    }
    fetchProperties()
  }, [])

  const handleDeleteClick = async(id) => {
    const deletedProperty = await propertyService.deleteProperty(id)
    const updatedProperties = properties.filter((property) => property._id !== deletedProperty._id)
    setProperties(updatedProperties)
  }

  return (
    <main className={styles.container}>
      <h1>Denver Real Estate Listings</h1>
      <Helmet>
        <title>Denver Real Estate Listings</title>
        <link rel="canonical" href={`/listings`} />
        <meta name='description' content={`Real estate listings for sale in Denver Colorado`} />
        <meta property='og:title' content='Denver Real Estate Listings' />
        <meta property='og:description' content={`Real estate listings for sale in Denver Colorado`} />
      </Helmet>
      {properties ?
      <div className={styles.propertyContainer}>
        {properties.map((property, idx) => 
          <PropertyCard key={property._id} property={property} user={user} handleDeleteClick={handleDeleteClick} idx={idx}/>
        )}
      </div>
      :
        <>
        <h3>Loading Listings...</h3>
        </>
      }
    </main>
  )
}
