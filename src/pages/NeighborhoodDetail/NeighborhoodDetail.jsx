// routes will not work as landing pages with direct links
// landing pages being optimized for PPC or SEO need to be staticly rendered 


// npm modules
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// components


// services
import * as neighborhoodService from '../../services/neighborhoodService'

// styles
import styles from './NeighborhoodDetail.module.css'

// component


export default function NeighborhoodDetail({ user, neighborhoods, setNeighborhoods }) {
  const navigate = useNavigate()
  
  const location = useLocation()
  const slug = location.pathname.slice(1)

  const [neighborhood, setNeighborhood] = useState(null)
  
  useEffect(() => {
    const getNeighborhood = async (slug) => {
      const neighborhood = await neighborhoodService.fetchNeighborhood(slug)
      setNeighborhood(neighborhood[0])
    }
    getNeighborhood(slug)
  },[])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    beds: '',
    baths: '',
    budget: '',
    targetMoveIn: '',
    comments: '',
  })

  const [popup, setPopup] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setPopup(!popup)
  }
  
  const handleDeleteClick = async (id) => {
    const deletedNeighborhood = await neighborhoodService.deleteNeighborhood(id)
    const updatedNeighborhoods = neighborhoods.filter((el) => el._id !== deletedNeighborhood._id)
    setNeighborhoods(updatedNeighborhoods)
    navigate(`/neighborhoods`)
  } 

  if(neighborhood){
    return (
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.bg}>
            <img src={neighborhood.hero} alt={`hero of ${neighborhood.name}`} />
          </div>
          <div className={styles.title}>
            <p>{neighborhood.name}</p>
            {user &&
              <div className={styles.buttons}>
                <Link to={`/neighborhoods/edit/${neighborhood._id}`} className={styles.btn} state={neighborhood}>Edit</Link>
                <button type='button' onClick={() => handleDeleteClick(neighborhood._id)}>Delete</button>
              </div>
            }
          </div>
        </div>
        <div className={styles.statContainer}>
          {neighborhood.stat1.length !== 0 &&
            <div className={styles.stat}>
              <p className={styles.statName}>{neighborhood.stat1[0]}</p>
              <p className={styles.statNumber}>{neighborhood.stat1[1]}</p>
            </div>
          }
          {neighborhood.stat2.length !== 0 &&
            <div className={styles.stat}>
              <p className={styles.statName}>{neighborhood.stat2[0]}</p>
              <p className={styles.statNumber}>{neighborhood.stat2[1]}</p>
            </div>
          }
          {neighborhood.stat3.length !== 0 &&
            <div className={styles.stat}>
              <p className={styles.statName}>{neighborhood.stat3[0]}</p>
              <p className={styles.statNumber}>{neighborhood.stat3[1]}</p>
            </div>
          }
          {neighborhood.stat4.length !== 0 &&
            <div className={styles.stat}>
              <p className={styles.statName}>{neighborhood.stat4[0]}</p>
              <p className={styles.statNumber}>{neighborhood.stat4[1]}</p>
            </div>
          }
        </div>
        <div className={styles.info}>
          <div className={styles.about}>
            <h2>About {neighborhood.name}</h2>
            <p>{neighborhood.about}</p>
            <p>{neighborhood.about}</p>
          </div>
          <div className={styles.map}>
            <img src={neighborhood.map} alt={`map of ${neighborhood.name}`} />
          </div>
        </div>
        <div className={styles.contact}>
          <h1>Request The Latest {neighborhood.name} Listings</h1>
          <form
          autoComplete="off"
          // onSubmit={handleSubmit}
          className={styles.form}
        >
          {popup &&
            <div className={styles.confirmation}>
              <h1>Thank You!</h1>
              <p>I'll be in touch soon with the latest listings.</p>
              <button onClick={() => handleSubmit()} type='button'>Close</button>
            </div>
          }
          <div className={styles.sideBySide}>
  
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.sideBySide}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={handleChange}
            />
          </div>
          </div>
          <div className={styles.sideBySide}>
          <div className={styles.inputContainer}>
            <label htmlFor="beds">Beds Needed</label>
            <input
              type="number"
              name="beds"
              id="beds"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="baths">Baths Needed</label>
            <input
              type="number"
              name="baths"
              id="baths"
              onChange={handleChange}
            />
          </div>
          </div>
          <div className={styles.sideBySide}>
          <div className={styles.inputContainer}>
            <label htmlFor="budget">Budget Range</label>
            <input
              type="text"
              name="budget"
              id="budget"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="targetMoveIn">Target Move In</label>
            <input
              type="date"
              name="targetMoveIn"
              id="targetMoveIn"
              onChange={handleChange}
            />
          </div>
          </div>
  
          <div className={styles.inputContainer}>
            <label htmlFor="comments">Comments</label>
            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>
          <button onClick={() => handleSubmit()} type='button'>Sumbit</button>
        </form>
        </div>
      </main>
    )
  } else {
    return (
      <main className={styles.container}>
        <h1>Loading...</h1>
      </main>
    )
  }
}
