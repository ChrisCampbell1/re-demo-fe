// npm modules
import { useState, useEffect } from 'react'

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
      <h1>Listings</h1>
      {properties ?
        properties.map((property) => 
          <PropertyCard key={property._id} property={property} user={user} handleDeleteClick={handleDeleteClick}/>
        )
      :
        <>
        <h3>Loading Listings...</h3>
        </>
      }
    </main>
  )
}
