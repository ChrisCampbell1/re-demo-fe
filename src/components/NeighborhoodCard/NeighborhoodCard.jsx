// npm modules
import { Link, useNavigate } from 'react-router-dom'
import { delay, motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  return (
    <motion.div
      className={styles.container}
      ref={ref}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 100,
      }}
      initial={{
        opacity: 0,
        y: 100,

        
      }}
      transition={{
        stiffness: 100,
        delay: .5,
        type: "spring",
      }}
    >
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
    </motion.div>
  )
}
