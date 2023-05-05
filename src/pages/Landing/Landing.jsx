// npm modules
import { useState, useEffect } from 'react'

// components
import HeroStatic from '../../components/HeroStatic/HeroStatic'
import HeroVideo from '../../components/HeroVideo/HeroVideo'
import HeroMulti from '../../components/HeroMulti/HeroMulti'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import ContactForm from '../../components/ContactForm/ContactForm'

// services
import * as propertyService from '../../services/propertyService'


// styles and assets
import styles from './Landing.module.css'
import headshot from '../../assets/photos/headshot.jpg'

const Landing = ({ user }) => {
  const [properties, setProperties] = useState(null)

  useEffect(() => {
    const fetchProperties = async() => {
      const properties = await propertyService.getAllProperties()
      const featured = properties.filter((property) => property.featured === true)
      setProperties(featured)
    }
    fetchProperties()
  }, [])  

  return (
    <main className={styles.container}>
      {/* <HeroStatic /> */}
      <HeroVideo />
      {/* <HeroMulti /> */}
      <div className={styles.about}>
        <div className={styles.headshot}>
          <img src={headshot} alt="headshot" />
        </div>
        <div className={styles.bio}>
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam deleniti maiores facilis aliquid omnis est aperiam explicabo? Eius facilis nulla totam debitis tempora distinctio ullam cumque iusto nesciunt facere.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam deleniti maiores facilis aliquid omnis est aperiam explicabo? Eius facilis nulla totam debitis tempora distinctio ullam cumque iusto nesciunt facere.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam deleniti maiores facilis aliquid omnis est aperiam explicabo? Eius facilis nulla totam debitis tempora distinctio ullam cumque iusto nesciunt facere.</p>
        </div>
      </div>
      <div className={styles.listings}>
        {properties &&
        <>
          <h1>Featured Listings</h1>
          <div className={styles.listingContainer}>
            {properties.map((property) =>
              <PropertyCard property={property} key={property._id} user={user}/>
            )}
          </div>
        </>
        }
      </div>
      <div className={styles.contact}>
        <h1>Let's get in touch!</h1>
        <ContactForm />
      </div>
    </main>
  )
}

export default Landing
