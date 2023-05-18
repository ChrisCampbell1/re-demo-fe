// npm modules
import { useLocation } from 'react-router-dom'

// components
import EditPropertyForm from '../../components/EditPropertyForm/EditPropertyForm'

// services


// styles
import styles from './EditProperty.module.css'

// component


export default function EditProperty({ properties, setProperties }) {
  const location = useLocation()
  const property = location.state
  
  return (
    <main className={styles.container}>
      <h1>Edit Listing</h1>
      <EditPropertyForm property={property} properties={properties} setProperties={setProperties}/>
    </main>
  )
}
