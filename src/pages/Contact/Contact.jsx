// npm modules
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// components
import ContactForm from '../../components/ContactForm/ContactForm'

// services


// styles
import styles from './Contact.module.css'

// component


export default function Contact() {
  const location = useLocation()
  const [property, setProperty] = useState(location.state)
  

  // useEffect(() => {
  //   if(location.state) {
  //     setProperty(location.state)
  //   }
  // }, [])

  return (
    <main className={styles.container}>
      <h1>Let's get in touch!</h1>
      {property ?
        <ContactForm property={property}/>
        :
        <ContactForm />
      }
    </main>
  )
}
