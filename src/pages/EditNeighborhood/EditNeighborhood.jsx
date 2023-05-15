// npm modules
import { useLocation } from 'react-router-dom'

// components
import EditNeighborhoodForm from '../../components/EditNeighborhoodForm/EditNeighborhoodForm'

// services


// styles
import styles from './EditNeighborhood.module.css'

// component


export default function EditNeighborhood({ setNeighborhoods, neighborhoods }) {
  const location = useLocation()
  const neighborhood = location.state
  
  return (
    <main className={styles.container}>
      <h1>Edit Neighborhood Page</h1>
      <EditNeighborhoodForm neighborhood={neighborhood} setNeighborhoods={setNeighborhoods} neighborhoods={neighborhoods}/>
    </main>
  )
}
