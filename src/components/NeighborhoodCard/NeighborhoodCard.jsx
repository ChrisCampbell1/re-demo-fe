// npm modules
import { Link, useNavigate } from 'react-router-dom'


// components


// services
import * as neighborhoodService from '../../services/neighborhoodService'

// styles
import styles from './NeighborhoodCard.module.css'

// component


export default function NeighborhoodCard({ neighborhood, user, setNeighborhoods, neighborhoods }) {
  const navigate = useNavigate()

  const handleDeleteClick = async (id) => {
    const deletedNeighborhood = await neighborhoodService.deleteNeighborhood(id)
    const updatedNeighborhoods = neighborhoods.filter((el) => el._id !== deletedNeighborhood._id)
    setNeighborhoods(updatedNeighborhoods)
    navigate(`/neighborhoods`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
          <div className={styles.bg}>
            <img src={neighborhood.hero} alt={`hero of ${neighborhood.name}`} />
          </div>
        <div className={styles.title}>
        <Link to={`/${neighborhood.slug}`} style={{ textDecoration: 'none' }}>
          <p>{neighborhood.name}</p>
        </Link>
          {user &&
            <div className={styles.buttons}>
              <Link to={`/neighborhoods/edit/${neighborhood._id}`} className={styles.btn} state={neighborhood}>Edit</Link>
              <button type='button' onClick={() => handleDeleteClick(neighborhood._id)}>Delete</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
